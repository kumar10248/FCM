import { NextResponse } from 'next/server';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

interface Feedback {
  name: string;
  uid: string;
  rating: number;
  feedback: string;
  timestamp: string;
  filename?: string;
}

export async function GET() {
  try {
    const jsonFilePath = path.join(process.cwd(), 'feedbacks', 'feedbacks.json');
    
    // Check if feedbacks file exists
    if (!existsSync(jsonFilePath)) {
      return NextResponse.json({
        success: true,
        feedbacks: [],
        count: 0,
        averageRating: 0
      });
    }

    // Read feedbacks
    const data = await readFile(jsonFilePath, 'utf-8');
    const feedbacks: Feedback[] = JSON.parse(data);

    // Calculate statistics
    const count = feedbacks.length;
    const averageRating = count > 0 
      ? feedbacks.reduce((sum: number, f: Feedback) => sum + f.rating, 0) / count 
      : 0;

    return NextResponse.json({
      success: true,
      feedbacks,
      count,
      averageRating: Math.round(averageRating * 10) / 10
    });

  } catch (error) {
    console.error('Error fetching feedbacks:', error);
    return NextResponse.json(
      { error: 'Failed to fetch feedbacks', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  try {
    const jsonFilePath = path.join(process.cwd(), 'feedbacks', 'feedbacks.json');
    
    if (existsSync(jsonFilePath)) {
      await writeFile(jsonFilePath, '[]', 'utf-8');
    }

    return NextResponse.json({
      success: true,
      message: 'All feedbacks cleared'
    });

  } catch (error) {
    console.error('Error clearing feedbacks:', error);
    return NextResponse.json(
      { error: 'Failed to clear feedbacks' },
      { status: 500 }
    );
  }
}
