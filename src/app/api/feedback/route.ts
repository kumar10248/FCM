import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, uid, rating, feedback } = body;

    // Validate required fields
    if (!name || !rating || !feedback) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const timestamp = new Date();
    const filename = `feedback_${name.replace(/\s+/g, '_')}_${timestamp.getTime()}.txt`;
    
    // Create feedback directory if it doesn't exist
    const feedbackDir = path.join(process.cwd(), 'feedbacks');
    if (!existsSync(feedbackDir)) {
      await mkdir(feedbackDir, { recursive: true });
    }

    // Format feedback as text
    const feedbackText = `
═══════════════════════════════════════════════════
                 FEEDBACK SUBMISSION
═══════════════════════════════════════════════════

Date & Time: ${timestamp.toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'long'
    })}

───────────────────────────────────────────────────
USER INFORMATION
───────────────────────────────────────────────────
Name: ${name}
UID:  ${uid || 'Not provided'}

───────────────────────────────────────────────────
RATING
───────────────────────────────────────────────────
Score: ${'⭐'.repeat(rating)} (${rating}/5)

───────────────────────────────────────────────────
FEEDBACK
───────────────────────────────────────────────────
${feedback}

═══════════════════════════════════════════════════
`;

    // Save to file
    const filePath = path.join(feedbackDir, filename);
    await writeFile(filePath, feedbackText, 'utf-8');

    // Also save as JSON for easy reading by the viewer
    const jsonData = {
      name,
      uid: uid || 'Not provided',
      rating,
      feedback,
      timestamp: timestamp.toISOString(),
      filename
    };

    const jsonFilePath = path.join(feedbackDir, 'feedbacks.json');
    let feedbacksArray = [];
    
    // Read existing feedbacks if file exists
    if (existsSync(jsonFilePath)) {
      const existingData = await import('fs').then(fs => 
        fs.promises.readFile(jsonFilePath, 'utf-8')
      );
      feedbacksArray = JSON.parse(existingData);
    }
    
    feedbacksArray.push(jsonData);
    await writeFile(jsonFilePath, JSON.stringify(feedbacksArray, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Feedback saved successfully',
      filename,
      data: jsonData
    });

  } catch (error) {
    console.error('Error saving feedback:', error);
    return NextResponse.json(
      { error: 'Failed to save feedback', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
