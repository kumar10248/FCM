import { Question, PracticeMode, PassageQuestion, AllQuestionsData, UnitQuestions } from "../types";

// Module-level debug - this will run when the module is loaded
console.log('=== questions.ts module loaded ===');

const allQuestionsData: AllQuestionsData = {
  unit1: {
    module6:[
  {
    "question": "Which of the following best describes the advantage of circuit switching?",
    "options": [
      "It provides a reliable communication channel.",
      "It efficiently handles bursty traffic.",
      "It doesn't waste bandwidth."
    ],
    "explanation": "Circuit switching establishes a dedicated communication path between sender and receiver for the entire duration of the communication session. This dedicated path ensures reliable, consistent communication with guaranteed bandwidth and minimal delay variation, making it ideal for real-time applications like voice calls.",
    "correctAnswer": [0]
  },
  {
    "question": "Choose the one that best describes the disadvantage of circuit switching.",
    "options": [
      "Connection setup delay",
      "Best-effort delivery",
      "Out-of-order delivery"
    ],
    "explanation": "Circuit switching requires establishing a dedicated path before communication can begin. This setup process involves signaling and resource reservation across the network, which introduces delay before actual data transmission starts. This is particularly noticeable in telephone systems where you hear ringing before connection.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following best describes the advantage of packet switching?",
    "options": [
      "Data forwarding mechanism is simple.",
      "Per-packet overhead is low.",
      "It allows multiplexing."
    ],
    "explanation": "Packet switching allows multiple users to share the same network resources simultaneously through multiplexing. Unlike circuit switching where resources are dedicated to one connection, packet switching efficiently utilizes network capacity by interleaving packets from different users on the same links, maximizing network utilization.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following directly communicates with UE (user equipment) in LTE network?",
    "options": [
      "eNodeB",
      "SGW",
      "MME",
      "PGW"
    ],
    "explanation": "eNodeB (evolved Node B) is the base station in LTE networks that provides the radio interface directly with user equipment (smartphones, tablets, etc.). It handles radio resource management, mobility control, and is the first point of contact for all user communications in the LTE architecture.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following acts as an interface between the external Internet and LTE network?",
    "options": [
      "eNodeB",
      "SGW",
      "MME",
      "PGW"
    ],
    "explanation": "PGW (PDN Gateway) serves as the gateway between the LTE network and external packet data networks like the Internet. It provides connectivity to external networks, handles IP address allocation, policy enforcement, and charging functions, making it the exit/entry point for internet traffic.",
    "correctAnswer": [3]
  },
  {
    "question": "What is the name of the process that connects a moving UE from one eNodeB to the other eNodeB without service disconnection?",
    "options": [
      "Handover",
      "Anchoring",
      "Cell coverage"
    ],
    "explanation": "Handover (also called handoff) is the process that allows a mobile device to maintain its connection while moving from the coverage area of one base station (eNodeB) to another. This seamless transition ensures continuous service without dropping calls or losing data connections as users move through the network.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following is the name of the process that translates domain names into IP addresses?",
    "options": [
      "IP address allocation",
      "DNS resolution",
      "Initial attachment"
    ],
    "explanation": "DNS (Domain Name System) resolution is the process of converting human-readable domain names (like google.com) into IP addresses (like 142.250.191.14) that computers use to identify and communicate with each other on the internet. This translation is essential for web browsing and internet communication.",
    "correctAnswer": [1]
  },
  {
    "question": "Choose the term that represents saving requested web pages for subsequent use.",
    "options": [
      "Proxying",
      "Caching",
      "Load balancing"
    ],
    "explanation": "Caching is the process of storing frequently accessed web content (pages, images, files) in temporary storage locations closer to users. This reduces loading times, decreases server load, and improves user experience by serving content from cache rather than requesting it from the original server each time.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT related to traffic reduction in LTE network?",
    "options": [
      "Handover",
      "DNS resolution",
      "Proxy forwarding"
    ],
    "explanation": "Handover is a mobility management function that maintains connectivity as users move between cell towers, but it doesn't reduce network traffic. DNS resolution and proxy forwarding can reduce traffic through caching and optimization, while handover focuses on seamless connectivity rather than traffic optimization.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following is NOT a benefit of using LTE and WiFi together?",
    "options": [
      "It better supports user mobility.",
      "It provides more bandwidth hence, better throughput.",
      "It reduces operating costs."
    ],
    "explanation": "Using LTE and WiFi together typically increases operating costs rather than reducing them, as operators must maintain both cellular infrastructure and WiFi access points. While this combination improves mobility support and increases available bandwidth through network aggregation, the dual infrastructure increases operational expenses.",
    "correctAnswer": [2]
  },
  {
    "question": "Which software is usually used for network access control in an organizational network?",
    "options": [
      "Firewall",
      "Gateway",
      "Router",
      "Virus checker"
    ],
    "explanation": "A firewall is a network securing software that prevents unauthorized users and dangerous elements from accessing the network. Software firewall acts as a filter for our network which prevents harmful information.",
    "correctAnswer": [0]
  }

],
      
      module2:[
  {
    "question": "The amount of information obtained by knowing the result of a random experiment is the same to the amount of (A)_______ on the result. In the case of tossing coin it is maximized when the coin is (B)_______ and the corresponding amount of information is (C)___ bit.",
    "options": [
      "(A) certainty, (B) fair, (C) 1",
      "(A) certainty, (B) fair, (C) 0",
      "(A) certainty, (B) unfair, (C) 1",
      "(A) uncertainty, (B) fair, (C) 1",
      "(A) uncertainty, (B) unfair, (C) 0"
    ],
    "explanation": "Information theory states that the amount of information obtained from a random experiment equals the amount of uncertainty about the result. For a coin toss, information is maximized when the coin is fair (equal probability of heads and tails), creating maximum uncertainty. A fair coin provides exactly 1 bit of information since there are 2 equally likely outcomes (log₂(2) = 1 bit).",
    "correctAnswer": [3]
  },
  {
    "question": "Suppose that the maximum frequency component of a signal is W [Hz]. According to the sampling theorem, if the sample rate is above or equal to (A)_____, called the Nyquist rate, the original signal can be recovered perfectly. Representing a continuous value requires (B)______ number of bits because the resolution is (B)_______. If we increase the resolution of a quantizer, the distortion is (C)_______ but the information rate will be (D)_______.",
    "options": [
      "(A) W, (B) finite, (C) increased, (D) decreased",
      "(A) W, (B) infinite, (C) decreased, (D) increased",
      "(A) 2W, (B) finite, (C) increased, (D) decreased",
      "(A) 2W, (B) infinite, (C) increased, (D) decreased",
      "(A) 2W, (B) infinite, (C) decreased, (D) increased"
    ],
    "explanation": "The Nyquist sampling theorem requires a sampling rate of at least 2W (twice the maximum frequency) to perfectly recover the original signal. Representing continuous values theoretically requires infinite bits for perfect precision. Increasing quantizer resolution decreases distortion (better approximation) but increases the information rate (more bits needed per sample).",
    "correctAnswer": [4]
  },
  {
    "question": "For wireless communications, we use an electrical device called antenna which converts an electrical current into a(n) (A)_______ and vice versa. A(n) (A)_______ can propagate a long distance with the speed of light. By doing this, we can deliver information wirelessly. Mathematically, we can decompose a signal according to its constituent (B)______ components. The power spectrum of a signal indicates the power distribution of the information bearing signal according to (B)______. Here, the range of non-zero power distribution is called the signal (C)______ and it determines the speed of change in the signal. Remember that this is one resource we need to pay for transferring information. If we increase the (D)______ of the transmit signal, the intensity of the propagated radio wave increases, which implies longer propagation distance and better immunity for non-ideal effects. So, (D)______ is another resource we need to pay.",
    "options": [
      "(A) radio wave, (B) frequency, (C) power, (D) bandwidth",
      "(A) radio wave, (B) frequency, (C) bandwidth, (D) power",
      "(A) radio wave, (B) time, (C) power, (D) bandwidth",
      "(A) acoustic wave, (B) frequency, (C) bandwidth, (D) power",
      "(A) acoustic wave, (B) time, (C) power, (D) bandwidth"
    ],
    "explanation": "Antennas convert electrical current into radio waves and vice versa. Radio waves propagate at the speed of light enabling wireless communication. Signals are decomposed into frequency components, with the power spectrum showing power distribution across frequencies. The bandwidth (range of non-zero power) determines signal variation speed. Increasing transmit power increases radio wave intensity, enabling longer range and better immunity to interference.",
    "correctAnswer": [1]
  },
  {
    "question": "The PSD of the thermal noise is (A)_____. The noise power contained within the bandwidth of W is (B)_____. Using the bandwidth of W is equivalent to use (C)_____ independent samples. Then, the Shannon capacity is given as (D)_____ when the received signal power is P.",
    "options": [
      "(A) N₀/2, (B) N₀W, (C) W, (D) W/2 log₂(1 + 2P/N₀W)",
      "(A) N₀/2, (B) N₀W, (C) 2W, (D) W/2 log₂(1 + 2P/N₀W)",
      "(A) N₀/2, (B) N₀W, (C) 2W, (D) W log₂(1 + P/N₀W)",
      "(A) N₀, (B) N₀W, (C) W, (D) W/2 log₂(1 + P/N₀W)",
      "(A) N₀, (B) 2N₀W, (C) 2W, (D) W log₂(1 + P/N₀W)"
    ],
    "explanation": "Thermal noise has a flat power spectral density (PSD) of N₀/2 watts per Hz. Over bandwidth W, the total noise power is N₀W. By the Nyquist theorem, bandwidth W supports 2W independent samples per second. The Shannon capacity formula is C = W log₂(1 + P/N₀W) where P is signal power and N₀W is noise power.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the right order of processing sequence at the transmitter?",
    "options": [
      "(Channel Encoding) – (Constellation Mapping) – (Waveform Mapping) – (Up Converting & Power Amp)",
      "(Channel Encoding) – (Waveform Mapping) – (Constellation Mapping) – (Up Converting & Power Amp)",
      "(Waveform Mapping) – (Constellation Mapping) – (Channel Encoding) – (Up Converting & Power Amp)",
      "(Constellation Mapping) – (Waveform Mapping) – (Up Converting & Power Amp) – (Channel Encoding)",
      "(Constellation Mapping) – (Channel Encoding) – (Up Converting & Power Amp) – (Waveform Mapping)"
    ],
    "explanation": "The correct transmitter processing sequence is: 1) Channel Encoding (adds error correction codes), 2) Constellation Mapping (maps bits to symbols), 3) Waveform Mapping (converts symbols to analog waveforms), and 4) Up Converting & Power Amplification (shifts to transmission frequency and amplifies). This sequence ensures proper signal preparation from digital data to RF transmission.",
    "correctAnswer": [0]
  },
  {
    "question": "Consider the case where a detection fails but the channel decoder recovers it. The noisy received symbols close to the (A)_______ are very probable to produce bit errors. But, the channel decoder may find that the erroneous bit sequence is not a possible candidate sequence and correct the errors by mapping to the closest (B)_______ sequence. Although such mapping can fail either, such probability vanishes as the information bit size k (C)_____.",
    "options": [
      "(A) original symbols, (B) erroneous, (C) increases",
      "(A) original symbols, (B) possible, (C) decreases",
      "(A) original symbols, (B) possible, (C) increases",
      "(A) boundaries, (B) erroneous, (C) decreases",
      "(A) boundaries, (B) possible, (C) increases"
    ],
    "explanation": "In digital communication systems, received symbols near decision boundaries between constellation points are most likely to cause detection errors. Channel decoders can correct these errors by recognizing that the erroneous bit sequence is not a valid codeword and mapping it to the closest possible (valid) codeword. As the information block size k increases, the probability of decoding failure decreases due to better error correction capability with longer codes.",
    "correctAnswer": [4]
  },
  {
    "question": "Select the correct answer(s).",
    "options": [
      "If we divide the area into many cells and use one base station per each cell, much more power is required.",
      "If users in different cells reuse the same frequency channels, the required bandwidth becomes much reduced.",
      "Supporting many users in a large area by only one transmitter is the power efficient way.",
      "Cellular structure is bandwidth-efficient way to support many users in a large area but is not power-efficient."
    ],
    "explanation": "In cellular systems, frequency reuse across different cells dramatically reduces the total bandwidth requirement since the same frequencies can be used simultaneously in non-adjacent cells. This makes cellular architecture highly bandwidth-efficient for supporting many users across large areas, which is the primary advantage of cellular design.",
    "correctAnswer": [1]
  },
  {
    "question": "The base station selects one among the predetermined (A)_____ based on the (B)_____ and transferring information by using it. This is called (C)_____.",
    "options": [
      "(A) AMC (B) MCS (C) CQI",
      "(A) AMC (B) CQI (C) MCS",
      "(A) MCS (B) AMC (C) CQI",
      "(A) MCS (B) CQI (C) AMC",
      "(A) CQI (B) MCS (C) AMC"
    ],
    "explanation": "In adaptive communications, the base station selects one among predetermined MCS (Modulation and Coding Schemes) based on the CQI (Channel Quality Indicator) reported by the user. This adaptive selection process is called AMC (Adaptive Modulation and Coding), which optimizes transmission parameters based on current channel conditions.",
    "correctAnswer": [3]
  },
  {
    "question": "In frequency division multiple access (FDMA), (A)_____ channels are allocated by dividing frequency. In time division multiple access (TDMA), (B)_____ channels are allocated by dividing time. In code division multiple access (CDMA), typically (C)_____ codes are allocated to users so that each user can use the whole time and bandwidth.",
    "options": [
      "(A) orthogonal (B) orthogonal (C) orthogonal",
      "(A) orthogonal (B) orthogonal (C) quasi-orthogonal",
      "(A) orthogonal (B) quasi-orthogonal (C) orthogonal",
      "(A) quasi-orthogonal (B) orthogonal (C) quasi-orthogonal",
      "(A) quasi-orthogonal (B) quasi-orthogonal (C) quasi-orthogonal"
    ],
    "explanation": "FDMA uses orthogonal frequency channels (non-overlapping frequencies), TDMA uses orthogonal time slots (non-overlapping time periods), and CDMA uses quasi-orthogonal spreading codes. In CDMA, perfect orthogonality is difficult to maintain due to multipath propagation and timing issues, so quasi-orthogonal codes are used, which have low but non-zero cross-correlation.",
    "correctAnswer": [1]
  },
  {
    "question": "Compare the two-user rate region of CDMA, FDMA, and TDMA.",
    "options": [
      "CDMA ≥ FDMA ≥ TDMA",
      "CDMA ≥ TDMA ≥ FDMA",
      "FDMA ≥ CDMA ≥ TDMA",
      "FDMA ≥ TDMA ≥ CDMA",
      "TDMA ≥ FDMA ≥ CDMA"
    ],
    "explanation": "In terms of achievable rate regions for two users, FDMA typically provides the largest rate region because it uses orthogonal frequency separation without interference. TDMA is next, using orthogonal time slots. CDMA has the smallest rate region due to multiple access interference from quasi-orthogonal codes, where users interfere with each other even when using different spreading codes.",
    "correctAnswer": [3]
  }
],
      
      module3:[
  {
    "question": "Which action is better to cope with the so called \"cocktail effect\"?",
    "options": [
      "Shutdown every transmission",
      "Scheduling of transmission (e.g., round-robin way of transmission, allowing only some group of transmitters to transmit, etc)"
    ],
    "explanation": "The cocktail effect refers to interference caused by multiple simultaneous transmissions in wireless networks. Scheduling transmission using methods like round-robin or allowing only specific groups to transmit at certain times reduces interference by coordinating access to the shared wireless medium, rather than shutting down all transmissions which would be counterproductive.",
    "correctAnswer": [1]
  },
  {
    "question": "In a single channel radio network, as the number of communicating pairs increases, it is impossible to support every pair. Which is the better solution for such overwhelming interference scenario?",
    "options": [
      "Shrink the communication distance (such as multi-hop relay)",
      "Make every node \"move\" randomly and wait for the source node to be close to its destination node."
    ],
    "explanation": "Shrinking communication distance through multi-hop relay reduces interference by decreasing transmission power and creating smaller interference zones. This allows more simultaneous communications in different parts of the network, effectively increasing spatial reuse and overall network capacity compared to random movement which is unpredictable and inefficient.",
    "correctAnswer": [0]
  },
  {
    "question": "Why does the cellular system look like as of today?",
    "options": [
      "To handle large amount of interference",
      "To save the power consumption of mobile terminals"
    ],
    "explanation": "Modern cellular systems use hexagonal cell patterns and frequency reuse schemes primarily to manage and minimize interference between different cells. By carefully planning cell layouts and frequency assignments, cellular networks can handle the massive interference that would otherwise occur when millions of users communicate simultaneously in densely populated areas.",
    "correctAnswer": [0]
  },
  {
    "question": "What are the drawbacks to have stationary access points in the wireless network?",
    "options": [
      "Increasing transmission power of mobile terminals.",
      "Frequent handover (switching to a new access point) as mobile terminals move around the service area."
    ],
    "explanation": "Stationary access points require frequent handovers as mobile devices move through the coverage area. Each time a device moves from one access point's coverage to another's, a handover process must occur to maintain connectivity. This creates signaling overhead, potential service interruptions, and complexity in mobility management.",
    "correctAnswer": [1]
  },
  {
    "question": "Increasing the base station density will increase the capacity of the cellular system?",
    "options": [
      "Yes, if the number of mobile terminals is fixed and their demand is fixed.",
      "Yes, even if the number of mobile terminals and their demand increase."
    ],
    "explanation": "Increasing base station density increases capacity only when the user population and their traffic demands remain constant. More base stations mean smaller cells, allowing for better spatial reuse of frequencies. However, if both the number of users and their demands increase proportionally with base station density, the capacity gain may be offset by the increased load.",
    "correctAnswer": [0]
  },
  {
    "question": "Select the two most unique features for the next generation cellular system (5G).",
    "options": [
      "Ultra-dense base stations",
      "mmWave transmission",
      "Long-distance transmission",
      "Frequent handover"
    ],
    "explanation": "5G networks are characterized by ultra-dense base station deployments for better coverage and capacity, and millimeter wave (mmWave) transmission for extremely high data rates. These features enable 5G's key capabilities: enhanced mobile broadband, ultra-reliable low-latency communications, and massive machine-type communications. Long-distance transmission and frequent handover are not unique 5G features.",
    "correctAnswer": [0, 1]
  },
  {
    "question": "The uplink power control is a typical example of radio resource management. When in the two-user case, is it optimal to shut off one of the users?",
    "options": [
      "The target SIR is too high.",
      "One mobile is too close to the base station."
    ],
    "explanation": "In uplink power control, when the target Signal-to-Interference Ratio (SIR) is set too high, it may become impossible for both users to achieve their required quality simultaneously due to interference limitations. In such cases, it's better to shut off one user to allow the other to meet the high SIR requirement, rather than having both users fail to achieve acceptable performance.",
    "correctAnswer": [0]
  },
  {
    "question": "In the distributed power control (DPC) algorithm, who measures the SIR (signal to interference), and reports it to whom?",
    "options": [
      "The base station measures it and report to the mobile terminal.",
      "The mobile terminal measures it and report to the base station."
    ],
    "explanation": "In distributed power control (DPC) algorithm, the base station measures the Signal-to-Interference Ratio (SIR) of the received signals from mobile terminals and reports this measurement back to the respective mobile terminal. The mobile terminal then uses this feedback to adjust its transmission power accordingly. This allows for distributed control where each mobile terminal can independently manage its power based on the SIR feedback from the base station.",
    "correctAnswer": [0]
  },
  {
    "question": "To balance between fairness and throughput-maximization, which objective could be used in packet scheduling?",
    "options": [
      "Maximize the minimum throughput of users",
      "Proportional fairness"
    ],
    "explanation": "Proportional fairness is a widely used objective in packet scheduling that balances fairness and throughput maximization. It ensures that users receive bandwidth proportional to their channel conditions while maintaining some level of fairness. This approach prevents users with poor channel conditions from being completely starved while still allowing the system to achieve good overall throughput.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the most important gain from the packet scheming in the cellular system?",
    "options": [
      "Increasing \"average\" data rate of each user.",
      "Save the power consumption of base stations."
    ],
    "explanation": "Packet scheduling's primary benefit is increasing the average data rate for each user by intelligently allocating resources based on channel conditions, traffic demands, and fairness criteria. By scheduling transmissions when channel conditions are favorable and managing resources efficiently, packet scheduling significantly improves user experience and network efficiency compared to simple round-robin approaches.",
    "correctAnswer": [0]
  }
],
      module4:[
        {
    "question": "For a perfectly uncorrelated (multipath) channel with 2 Tx antennas and 2 Rx antennas, how many paths can we exploit at maximum?",
    "options": [
      "2",
      "1",
      "8", 
      "4",
      "6"
    ],
    "explanation": "In a perfectly uncorrelated multipath channel with 2 Tx antennas and 2 Rx antennas, the maximum number of exploitable paths is 4. This is because each transmit antenna can have independent multipath channels to each receive antenna, creating 2×2 = 4 independent spatial paths that can be exploited for spatial multiplexing or diversity.",
    "correctAnswer": [3]
  },
  {
    "question": "If we have a 2 by 2 MIMO system with modulation scheme of 2 bps/Hz per symbol, what is the achievable maximum spectral efficiency?",
    "options": [
      "8 bps/Hz",
      "2 bps/Hz",
      "1 bps/Hz",
      "4 bps/Hz"
    ],
    "explanation": "For a 2×2 MIMO system with 2 bps/Hz per symbol modulation, the maximum spectral efficiency is 4 bps/Hz. This is calculated as: 2 spatial streams × 2 bps/Hz per symbol = 4 bps/Hz total. Each spatial stream can carry 2 bps/Hz, and with 2 independent streams, the total achievable spectral efficiency is doubled.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the statements is erroneous? (Choose two)",
    "options": [
      "Diversity can be achieved in space, time, and frequency.",
      "Tx diversity can be the same as Rx diversity.",
      "Multi-user MIMO can only be formed when a base station and a user both have multiple antennas at their sides.",
      "Diversity gain can be made by antenna selection.",
      "Alamouti coding is a type of antenna selection."
    ],
    "explanation": "The two erroneous statements are: 1) 'Multi-user MIMO can only be formed when a base station and a user both have multiple antennas at their sides' - Multi-user MIMO only requires multiple antennas at the base station, not necessarily at each user. 2) 'Alamouti coding is a type of antenna selection' - Alamouti coding is a space-time block coding technique, not antenna selection. It uses space-time coding across multiple antennas simultaneously.",
    "correctAnswer": [2, 4]
  },
  {
    "question": "Which of the following does not achieve maximum sum rate?",
    "options": [
      "A",
      "B", 
      "C",
      "D"
    ],
    "explanation": "Based on the water-filling algorithm diagrams shown, option D does not achieve maximum sum rate. The water-filling algorithm allocates power optimally across subcarriers based on channel conditions. Option D shows a suboptimal power allocation that doesn't follow the water-filling principle, resulting in lower sum rate compared to the optimal allocation.",
    "correctAnswer": [3],
    "image":"/images/m4-4.png",
    "imageSize":"large"
  },
  {
    "question": "Given the antenna configuration shown below, if we want to send the signal from the Tx to the Rx, which of the following should have high value for good performance (S is the S parameter)? (Choose two)",
    "options": [
      "S11",
      "S31", 
      "S32",
      "S21"
    ],
    "explanation": "For good transmission performance from Tx to Rx through a duplexer system, S21 and S12 should have high values. S21 represents the forward transmission coefficient (Tx to Rx path), and S12 represents the reverse transmission coefficient. High values for these parameters indicate good signal transmission through the duplexer with minimal loss.",
    "correctAnswer": [1, 2],
    "image":"/images/m4-3.png",
    "imageSize":"large"
  },
  {
    "question": "If antenna gain of 10 dBi was achieved using a single antenna, what would be the ideal gain of an array of antennas under identical conditions if the signal power was boosted by 100 times?",
    "options": [
      "50 dBi",
      "100 dBi",
      "20 dBi", 
      "30 dBi",
      "11 dBi"
    ],
    "explanation": "If the signal power is boosted by 100 times, this represents a 20 dB increase (10 × log10(100) = 20 dB). Adding this to the original antenna gain: 10 dBi + 20 dB = 30 dBi. Therefore, the ideal gain of the antenna array would be 30 dBi.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the statements is erroneous? (Choose two)",
    "options": [
      "The directivity of an antenna is determined by the beamwidth.",
      "Circular array and linear array generate identical radiation patterns.",
      "Radiation pattern can be only controlled by amplitude control.",
      "With very closely spaced receiver antennas (specifically correlated channels for SIMO single-input-multiple-output), an array gain of ≈dB can be achieved.",
      "Array gain can be used to reduce spatial interference for other users."
    ],
    "explanation": "The two erroneous statements are: 1) 'Circular array and linear array generate identical radiation patterns' - Different array geometries produce different radiation patterns due to their spatial configurations. 2) 'Radiation pattern can be only controlled by amplitude control' - Radiation patterns can be controlled by both amplitude and phase control of individual antenna elements, not just amplitude alone.",
    "correctAnswer": [1, 2]
  },
  {
    "question": "Which correctly names the types of antennas shown below?",
    "options": [
      "A: Whip, B: PCB, C: Feedhorn, D: Monopole, E: Dipole",
      "A: Chip, B: Dipole, C: Microstrip, D: Cassegrain, E: Monopole", 
      "A: Monopole, B: Dipole, C: PCB, D: Feedhorn, E: Cassegrain",
      "A: Whip, B: Monopole, C: PCB, D: Dipole, E: Cassegrain"
    ],
    "explanation": "Based on the antenna images shown: A appears to be a monopole antenna (single vertical element), B appears to be a dipole antenna (two-element design), C appears to be a PCB antenna (printed circuit board antenna), D appears to be a feedhorn antenna (horn-shaped), and E appears to be a Cassegrain antenna (parabolic dish with secondary reflector).",
    "correctAnswer": [2],
    "image":"/images/m4-1.png",
    "imageSize":"large"
  },
  {
    "question": "What cannot be the antenna gain for the directed antenna below in dBi?",
    "options": [
      "5 dBi",
      "3 dBi", 
      "6 dBi",
      "12 dBi"
    ],
    "explanation": "For the directional antenna shown with its radiation pattern, 3 dBi would be too low for a directed antenna of this type. Directional antennas typically have gains higher than 3 dBi due to their focusing effect. The other values (5, 6, and 12 dBi) are more realistic for directional antennas depending on their specific design and beamwidth.",
    "correctAnswer": [1],
    "image":"/images/m4-2.png",
    "imageSize":"large"
  },
  {
    "question": "Which of the following is a non-degraded channel?",
    "options": [
      "A",
      "B",
      "C", 
      "D"
    ],
    "explanation": "Based on the channel response diagrams, option C represents a non-degraded channel. A non-degraded channel maintains relatively flat frequency response across the bandwidth without significant attenuation or distortion, while the other options show various forms of channel degradation such as frequency-selective fading or significant attenuation.",
    "correctAnswer": [2],
    "image":"/images/m4-5.png",
    "imageSize":"large"
  }
      ],
    
       module5:[
  
  {
    "question": "Which of the following statements is not correct about LTE OFDM?",
    "options": [
      "OFDM is a parallel transmission method using multiple subcarriers.",
      "1200 subcarriers with 15KHz subcarrier spacing are used when the system bandwidth is 20MHz.",
      "The OFDM symbol length, which is the inverse of the system bandwidth, is 50ns when the system bandwidth is 20MHz.",
      "The cyclic prefix helps to keep the orthogonality among the multiple subcarriers in most typical practical cellular environments."
    ],
    "explanation": "The statement about OFDM symbol length is incorrect. The OFDM symbol length is not the inverse of the system bandwidth. In LTE, the OFDM symbol length is approximately 66.7μs (microseconds), not 50ns (nanoseconds). The symbol length is related to the subcarrier spacing (15 kHz), not the system bandwidth.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following statements is not correct about LTE MCS?",
    "options": [
      "BPSK, QPSK, 16QAM, and 64QAM can be used for each subcarrier in an OFDM symbol.",
      "Turbo code with various code rates is used as the channel code in LTE.",
      "Each LTE MCS is mapped to its own channel quality information index.",
      "The data rate of an LTE MCS is determined by the modulation order."
    ],
    "explanation": "The statement that 'The data rate of an LTE MCS is determined by the modulation order' is incorrect. The data rate of an LTE MCS (Modulation and Coding Scheme) is determined by both the modulation order AND the coding rate, not just the modulation order alone. Higher modulation orders allow more bits per symbol, but the coding rate also affects the effective data rate.",
    "correctAnswer": [3]
  },
  {
    "question": "Select the most appropriate one for the procedure of LTE H-ARQ.",
    "options": [
      "(CQI report) → (Scheduling) → (Data transmission) → (ACK or NACK) → (Retransmission if NACK)",
      "(Data transmission) → (Scheduling) → (CQI report) → (ACK or NACK) → (Retransmission if NACK)",
      "(Scheduling) → (CQI report) → (Data transmission) → (ACK or NACK) → (Retransmission if NACK)",
      "(CQI report) → (Data transmission) → (Scheduling) → (ACK or NACK) → (Retransmission if NACK)"
    ],
    "explanation": "The correct H-ARQ (Hybrid Automatic Repeat Request) procedure in LTE starts with CQI (Channel Quality Indicator) report from the UE, followed by scheduling decision by the base station, then data transmission, then ACK/NACK feedback, and finally retransmission if NACK is received. This sequence ensures proper channel assessment, resource allocation, and error recovery.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of following statements is not correct about LTE frame structure and multiple access?",
    "options": [
      "The basic resource unit is 1ms in time and 12 subcarriers in frequency.",
      "In downlink, orthogonal frequency division multiple access is used.",
      "In uplink, every user transmits with the same transmission power.",
      "In uplink, single carrier frequency division multiple access is used."
    ],
    "explanation": "The statement 'In uplink, every user transmits with the same transmission power' is incorrect. In LTE uplink, users do not transmit with the same power. Power control is used to optimize system performance, manage interference, and compensate for different path losses. Users closer to the base station typically transmit with lower power than users farther away.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the Tx structure is appropriate for the following scheme of SFBC (Space-Frequency-Block-Coding)?",
    "options": [
       {
        "text": "1",
        "image": "/images/op1.png",
        "imageSize": "small"
      },
      {
        "text": "2",
        "image": "/images/op2.png",
        "imageSize": "small"
      },
    ],
    "explanation": "Based on the diagram showing Antenna 1 and Antenna 2 with subcarrier allocation patterns (S0, S1, -S1*, S0*), this represents a 2x2 SFBC (Space-Frequency Block Coding) transmission structure where signals are transmitted across two antennas and two subcarriers with Alamouti-type coding.",
    "correctAnswer": [0],
    "image":"/images/m5-1.png",
    "imageSize":"large"
  },
  {
    "question": "Which of the following statements does not correspond to LTE-Advanced key items?",
    "options": [
      "Uplink diversity utilizing up to 4 antennas.",
      "Peak spectrum efficiency of 20 bps / Hz for downlink, and 30 bps / Hz for uplink.",
      "Coordinated multipoint transmission/reception, called CoMP.",
      "Extension of downlink diversity to 8 antennas.",
      "Further enhancement of downlink MU-MIMO (R10 main issue)."
    ],
    "explanation": "The statement about 'Peak spectrum efficiency of 20 bps / Hz for downlink, and 30 bps / Hz for uplink' is incorrect for LTE-Advanced. The actual peak spectrum efficiency targets for LTE-Advanced are typically 30 bps/Hz for downlink and 15 bps/Hz for uplink, not the values stated in the option.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is incorrect?",
    "options": [
      "A: Transmit diversity (TM2)",
      "B: Closed loop spatial multiplexing (TM3)", 
      "C: CL rank = 1 (TM6)",
      "D: Open loop spatial multiplexing (TM4)"
    ],
    "explanation": "Based on the diagram and your note, option D is incorrect. The diagram shows that position D corresponds to 'Multi-Stream Rank 2-4' under 'Closed Loop' operation with 'High SINR and rich scattering' conditions, which would be closed loop spatial multiplexing, not open loop spatial multiplexing (TM4).",
    "correctAnswer": [3],
    "image":"/images/m5-2.png",
    "imageSize":"large"
  },
  {
    "question": "What is the main reason to have open loop power control?",
    "options": [
      "Fast set-up for initial power level.",
      "Fast support of moving users."
    ],
    "explanation": "The main reason for open loop power control is fast set-up for initial power level. Open loop power control allows quick initial power estimation based on downlink measurements without requiring feedback from the base station, enabling rapid power level establishment when a user first connects or during handovers.",
    "correctAnswer": [0]
  },
  {
    "question": "Why is PF scheduler \"proportionally\" fair?",
    "options": [
      "It prioritizes less received users.",
      "It always gives more chances to users closer to the base station."
    ],
    "explanation": "PF (Proportional Fair) scheduler is 'proportionally' fair because it prioritizes users who have received less service relative to their channel conditions. It balances between maximizing total system throughput and providing fair access to all users by giving higher priority to users with relatively poor recent service history, thus achieving proportional fairness.",
    "correctAnswer": [0]
  }
],
     module1:[
  {
    "question": "What does BW stand for in communication field?",
    "options": [
      "BandWidth",
      "BroadWay",
      "BodyWeight",
      "Business Week"
    ],
    "explanation": "BW stands for BandWidth in the communication field. Bandwidth refers to the range of frequencies or the data transmission capacity of a communication channel, typically measured in Hertz (Hz) for analog signals or bits per second (bps) for digital signals.",
    "correctAnswer": [0]
  },
  {
    "question": "Which are the drawbacks of 1G? (Choose Three)",
    "options": [
      "Large Size Phone",
      "Poor Battery Performance",
      "Expensive Service Fee",
      "Wireless Communication"
    ],
    "explanation": "The main drawbacks of 1G (first-generation) cellular technology included large, bulky phones that were difficult to carry, poor battery performance requiring frequent charging, and expensive service fees that made mobile communication costly. Wireless communication itself was actually the main advantage of 1G, not a drawback.",
    "correctAnswer": [0, 1, 2]
  },
  {
    "question": "Which is the wrong one?",
    "options": [
      "FDMA: Frequency Division Multiple Access",
      "TDMA: Time Division Multiple Access",
      "CDMA: Code Division Multiple Access",
      "SMS: Social Message Service"
    ],
    "explanation": "SMS stands for Short Message Service, not Social Message Service. SMS is a text messaging service that allows users to send short text messages between mobile devices. The other acronyms are correctly defined multiple access techniques used in cellular communications.",
    "correctAnswer": [3]
  },
  {
    "question": "What is a specialized agency of the United Nations (UN), which is responsible for information and communication technology issues?",
    "options": [
      "ITU",
      "3GPP",
      "3GPP2",
      "Verizon"
    ],
    "explanation": "ITU (International Telecommunication Union) is the specialized agency of the United Nations responsible for information and communication technology issues. It coordinates global telecom networks and services, manages radio spectrum allocation, and develops international standards for telecommunications.",
    "correctAnswer": [0]
  },
  {
    "question": "Which are the keywords and key technologies used in 3G cellular systems? (Choose Three)",
    "options": [
      "Smartphone",
      "CDMA",
      "TDMA",
      "MMS"
    ],
    "explanation": "3G cellular systems introduced smartphones as the primary device, utilized CDMA (Code Division Multiple Access) as a key access technology, and enabled MMS (Multimedia Messaging Service) for sending multimedia content. While TDMA was used in earlier generations, CDMA became more prominent in 3G systems.",
    "correctAnswer": [0, 1, 3]
  },
  {
    "question": "According to 3GPP, what is the target data rate for 5G cellular system?",
    "options": [
      "10 Gbps",
      "20 Gbps",
      "30 Gbps",
      "40 Gbps"
    ],
    "explanation": "According to 3GPP specifications, the target peak data rate for 5G cellular systems is 20 Gbps for downlink. This represents a significant improvement over 4G LTE speeds and enables high-bandwidth applications like ultra-high-definition video streaming and advanced IoT applications.",
    "correctAnswer": [1]
  },
  {
    "question": "Which one is not a key technology for 5G system?",
    "options": [
      "NOMA",
      "Many Cell",
      "New Waveform",
      "TDMA"
    ],
    "explanation": "TDMA (Time Division Multiple Access) is not a key technology for 5G systems. TDMA was primarily used in 2G systems. Key 5G technologies include NOMA (Non-Orthogonal Multiple Access), Massive MIMO (Many Cell technology), and New Waveform techniques. 5G systems use more advanced multiple access schemes than the older TDMA approach.",
    "correctAnswer": [3]
  },
  {
    "question": "Which one is an incorrect keyword for 5G system? See the blank of the following sentence. The main targets for 5G (by 2020) are spectral efficiency, peak (a) massive (b), high (c) support, and low transmission (d).",
    "options": [
      "time",
      "connectivity",
      "mobility",
      "delay"
    ],
    "explanation": "The correct sentence should read: 'The main targets for 5G (by 2020) are spectral efficiency, peak connectivity, massive mobility, high reliability support, and low transmission delay.' Therefore, 'time' is the incorrect keyword as it doesn't fit in any of the blanks (a), (b), (c), or (d) in the context of 5G system targets.",
    "correctAnswer": [0]
  }
],
module7:[
  {
    "question": "Which of the following is a guided transmission medium?",
    "options": ["Radio Waves", "Optical Fiber", "Infrared", "Satellite"],
    "explanation": "Optical Fiber is a guided transmission medium that uses light signals to transmit data through a physical cable with a specific path.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT wireless communication?",
    "options": ["Bluetooth", "Satellite TV", "Ethernet LAN", "Wi-Fi"],
    "explanation": "Ethernet LAN uses physical cables for data transmission, making it a wired communication method, not wireless.",
    "correctAnswer": [2]
  },
  {
    "question": "Frequency is measured in:",
    "options": ["Seconds", "Hertz", "Meters", "Volts"],
    "explanation": "Frequency is the number of cycles per second and is measured in Hertz (Hz), named after Heinrich Hertz.",
    "correctAnswer": [1]
  },
  {
    "question": "Bandwidth of AM is equal to:",
    "options": ["fm", "2fm", "3fm", "4fm"],
    "explanation": "The bandwidth of Amplitude Modulation (AM) is twice the maximum frequency of the modulating signal (2fm).",
    "correctAnswer": [1]
  },
  {
    "question": "Which modulation provides the best noise immunity?",
    "options": ["AM", "FM", "ASK", "PAM"],
    "explanation": "Frequency Modulation (FM) provides better noise immunity compared to AM because noise primarily affects amplitude, not frequency.",
    "correctAnswer": [1]
  },
  {
    "question": "In Phase Shift Keying (PSK), the parameter varied is:",
    "options": ["Amplitude", "Frequency", "Phase", "Bandwidth"],
    "explanation": "In Phase Shift Keying (PSK), the phase of the carrier signal is varied to represent different data bits.",
    "correctAnswer": [2]
  },
  {
    "question": "QAM is a combination of:",
    "options": ["AM + FM", "ASK + FSK", "ASK + PSK", "AM + PCM"],
    "explanation": "Quadrature Amplitude Modulation (QAM) combines Amplitude Shift Keying (ASK) and Phase Shift Keying (PSK).",
    "correctAnswer": [2]
  },
  {
    "question": "Which modulation technique is used in FM radio?",
    "options": ["AM", "FM", "PSK", "QAM"],
    "explanation": "FM radio uses Frequency Modulation (FM) technique where the frequency of the carrier is varied according to the audio signal.",
    "correctAnswer": [1]
  },
  {
    "question": "GSM mobile systems mainly use:",
    "options": ["FDMA", "TDMA", "CDMA", "OFDMA"],
    "explanation": "GSM (Global System for Mobile Communications) primarily uses Time Division Multiple Access (TDMA) for separating users.",
    "correctAnswer": [1]
  },
  {
    "question": "3G mobile systems mainly use:",
    "options": ["FDMA", "TDMA", "CDMA", "OFDMA"],
    "explanation": "3G mobile systems primarily use Code Division Multiple Access (CDMA) technology for user separation.",
    "correctAnswer": [2]
  },
  {
    "question": "Which multiple access technique uses orthogonal subcarriers?",
    "options": ["FDMA", "TDMA", "CDMA", "OFDMA"],
    "explanation": "Orthogonal Frequency Division Multiple Access (OFDMA) uses orthogonal subcarriers to separate users efficiently.",
    "correctAnswer": [3]
  },
  {
    "question": "Soft Handover is used in:",
    "options": ["GSM", "CDMA", "FDMA", "LTE"],
    "explanation": "Soft handover is a characteristic feature of CDMA systems where a mobile can be connected to multiple base stations simultaneously.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT a digital modulation scheme?",
    "options": ["ASK", "FSK", "PSK", "FM"],
    "explanation": "FM (Frequency Modulation) is an analog modulation technique, while ASK, FSK, and PSK are digital modulation schemes.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the following is used in Wi-Fi and 4G LTE?",
    "options": ["QAM", "AM", "FM", "PCM"],
    "explanation": "Quadrature Amplitude Modulation (QAM) is widely used in modern communication systems like Wi-Fi and 4G LTE for high data rates.",
    "correctAnswer": [0]
  },
  {
    "question": "Pulse Code Modulation (PCM) is:",
    "options": ["Analog Modulation", "Digital Pulse Modulation", "Frequency Modulation", "Phase Modulation"],
    "explanation": "PCM is a digital pulse modulation technique that converts analog signals into digital form through sampling, quantization, and encoding.",
    "correctAnswer": [1]
  },
  {
    "question": "Which is NOT an advantage of digital signals?",
    "options": ["High noise immunity", "Easy storage", "Costlier than analog", "Reliable processing"],
    "explanation": "Digital signals being costlier than analog is actually a disadvantage, not an advantage of digital systems.",
    "correctAnswer": [2]
  },
  {
    "question": "Which frequency band is used for microwave communication?",
    "options": ["3 Hz – 30 Hz", "1 GHz – 300 GHz", "3 MHz – 30 MHz", "30 Hz – 300 Hz"],
    "explanation": "Microwave communication uses frequencies in the range of 1 GHz to 300 GHz for point-to-point communication.",
    "correctAnswer": [1]
  },
  {
    "question": "Frequency reuse in cellular networks improves:",
    "options": ["Antenna size", "Noise level", "Spectrum efficiency", "Modulation index"],
    "explanation": "Frequency reuse allows the same frequencies to be used in different cells, significantly improving spectrum efficiency.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is NOT a pulse modulation technique?",
    "options": ["PAM", "PWM", "PPM", "FM"],
    "explanation": "FM (Frequency Modulation) is not a pulse modulation technique. PAM, PWM, and PPM are all pulse modulation methods.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the following devices is part of a Mobile Station (MS)?",
    "options": ["BTS", "BSC", "SIM Card", "MSC"],
    "explanation": "A Mobile Station (MS) consists of Mobile Equipment (ME) and SIM card. BTS, BSC, and MSC are network infrastructure components.",
    "correctAnswer": [2]
  },
  {
    "question": "Twisted Pair Cable consists of:",
    "options": ["One copper wire", "Two copper wires twisted together", "Coaxial conductor", "Optical core"],
    "explanation": "Twisted pair cable consists of two copper wires twisted together to reduce electromagnetic interference and crosstalk.",
    "correctAnswer": [1]
  },
  {
    "question": "UTP cable is mostly used in:",
    "options": ["LAN", "WAN", "Satellite", "Wi-Fi"],
    "explanation": "Unshielded Twisted Pair (UTP) cable is primarily used in Local Area Networks (LAN) for Ethernet connections.",
    "correctAnswer": [0]
  },
  {
    "question": "Which cable provides highest data transfer speed?",
    "options": ["Twisted Pair", "Coaxial", "Optical Fiber", "Radio Wave"],
    "explanation": "Optical fiber provides the highest data transfer speed among guided media due to its use of light signals.",
    "correctAnswer": [2]
  },
  {
    "question": "Optical fiber core is made of:",
    "options": ["Copper", "Plastic or glass", "Aluminum", "Steel"],
    "explanation": "The core of optical fiber is made of high-quality glass or plastic that allows light to travel through with minimal loss.",
    "correctAnswer": [1]
  },
  {
    "question": "Which unguided medium requires line-of-sight?",
    "options": ["Radio Wave", "Microwave", "Infrared", "Satellite"],
    "explanation": "Microwave communication requires a clear line-of-sight path between transmitter and receiver due to its high frequency characteristics.",
    "correctAnswer": [1]
  },
  {
    "question": "Infrared waves cannot:",
    "options": ["Pass through walls", "Be used in remotes", "Work at short range", "Transmit in free space"],
    "explanation": "Infrared waves cannot pass through solid objects like walls, which limits their use to line-of-sight applications.",
    "correctAnswer": [0]
  },
  {
    "question": "Frequency of FM radio lies in:",
    "options": ["30–300 KHz", "535–1605 KHz", "88–108 MHz", "1–300 GHz"],
    "explanation": "FM radio broadcasts in the VHF band, specifically in the frequency range of 88-108 MHz.",
    "correctAnswer": [2]
  },
  {
    "question": "Bandwidth of AM =",
    "options": ["fm", "2fm", "4fm", "fm/2"],
    "explanation": "The bandwidth of Amplitude Modulation is twice the maximum frequency of the modulating signal (2fm).",
    "correctAnswer": [1]
  },
  {
    "question": "Carson's Rule is used to calculate bandwidth in:",
    "options": ["AM", "FM", "PM", "ASK"],
    "explanation": "Carson's Rule is specifically used to estimate the bandwidth required for Frequency Modulation (FM) signals.",
    "correctAnswer": [1]
  },
  {
    "question": "Digital modulation technique used in Bluetooth:",
    "options": ["ASK", "FSK", "PSK", "QAM"],
    "explanation": "Bluetooth uses Frequency Shift Keying (FSK) as its digital modulation technique for data transmission.",
    "correctAnswer": [1]
  },
  {
    "question": "QAM uses:",
    "options": ["One carrier", "Two carriers 90° out of phase", "Multiple antennas", "Optical fiber"],
    "explanation": "QAM uses two carrier signals that are 90° out of phase (quadrature) to carry information in both amplitude and phase.",
    "correctAnswer": [1]
  },
  {
    "question": "16-QAM carries:",
    "options": ["2 bits/symbol", "4 bits/symbol", "6 bits/symbol", "8 bits/symbol"],
    "explanation": "16-QAM has 16 different symbol states, which can represent 4 bits per symbol (2^4 = 16).",
    "correctAnswer": [1]
  },
  {
    "question": "Which pulse modulation is the first step in PCM?",
    "options": ["PPM", "PAM", "PWM", "PSK"],
    "explanation": "Pulse Amplitude Modulation (PAM) is the first step in PCM, where the analog signal is sampled at regular intervals.",
    "correctAnswer": [1]
  },
  {
    "question": "PCM consists of steps:",
    "options": ["Sampling, Quantization, Encoding", "Modulation, Amplification, Decoding", "Mixing, Transmission, Reception", "None"],
    "explanation": "Pulse Code Modulation (PCM) involves three main steps: sampling the analog signal, quantization of samples, and encoding into binary.",
    "correctAnswer": [0]
  },
  {
    "question": "FDMA assigns:",
    "options": ["Separate frequency bands", "Separate time slots", "Separate codes", "Separate antennas"],
    "explanation": "Frequency Division Multiple Access (FDMA) assigns separate frequency bands to different users for simultaneous communication.",
    "correctAnswer": [0]
  },
  {
    "question": "TDMA is mainly used in:",
    "options": ["1G", "2G GSM", "3G", "5G"],
    "explanation": "Time Division Multiple Access (TDMA) is the primary multiple access technique used in 2G GSM systems.",
    "correctAnswer": [1]
  },
  {
    "question": "CDMA separates users by:",
    "options": ["Frequency", "Time", "Code", "Bandwidth"],
    "explanation": "Code Division Multiple Access (CDMA) separates users by assigning unique codes to each user for identification.",
    "correctAnswer": [2]
  },
  {
    "question": "OFDMA is used in:",
    "options": ["AM Radio", "Wi-Fi 6 & 4G LTE", "GSM", "Bluetooth"],
    "explanation": "Orthogonal Frequency Division Multiple Access (OFDMA) is used in modern systems like Wi-Fi 6 and 4G LTE for efficient spectrum utilization.",
    "correctAnswer": [1]
  },
  {
    "question": "Frequency reuse in cellular system helps in:",
    "options": ["Increasing bandwidth", "Efficient spectrum use", "Reducing antenna height", "Noise reduction"],
    "explanation": "Frequency reuse allows the same frequencies to be used in non-adjacent cells, leading to efficient spectrum utilization.",
    "correctAnswer": [1]
  },
  {
    "question": "Hard handover follows:",
    "options": ["Make before Break", "Break before Make", "Both", "None"],
    "explanation": "Hard handover follows 'Break before Make' principle where the old connection is terminated before establishing the new one.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is considered the fastest data-transferring guided medium?",
    "options": ["Unshielded Twisted Pair (UTP)", "Coaxial Cable", "Optical Fiber Cable", "Shielded Twisted Pair (STP)"],
    "explanation": "Optical Fiber Cable provides the highest data transfer speeds due to its use of light signals and immunity to electromagnetic interference.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the primary difference between UTP and STP cables?",
    "options": ["UTP is used for telephones, while STP is used for Ethernet.", "UTP uses copper wires, while STP uses glass fibers.", "STP includes an additional shield to reduce noise, while UTP does not.", "STP is cheaper than UTP."],
    "explanation": "Shielded Twisted Pair (STP) includes additional shielding to reduce electromagnetic interference and noise, while UTP does not have this shielding.",
    "correctAnswer": [2]
  },
  {
    "question": "Coaxial cables are commonly used in which of the following applications?",
    "options": ["Telephone lines", "TV networks and broadband internet", "Backbone networks for ISPs", "Local Area Networks (LANs)"],
    "explanation": "Coaxial cables are primarily used in TV networks and broadband internet applications due to their good shielding and bandwidth characteristics.",
    "correctAnswer": [1]
  },
  {
    "question": "Why is optical fiber immune to electromagnetic interference?",
    "options": ["It has a strong outer plastic jacket.", "It uses light signals instead of electrical signals to transmit data.", "It is made of pure silica glass.", "It has multiple layers of insulation."],
    "explanation": "Optical fiber is immune to electromagnetic interference because it uses light signals rather than electrical signals for data transmission.",
    "correctAnswer": [1]
  },
  {
    "question": "Guided media is also known as bounded media because:",
    "options": ["It is very secure.", "It uses electromagnetic waves.", "It has a specific physical limit or path.", "It is used for short-distance transmission."],
    "explanation": "Guided media is called bounded media because it provides a specific physical path or boundary for signal transmission.",
    "correctAnswer": [2]
  },
  {
    "question": "Which type of unguided media requires a clear line-of-sight for proper signal transmission?",
    "options": ["Radio Waves", "Microwaves", "Infrared Waves", "Satellite Waves"],
    "explanation": "Microwaves require a clear line-of-sight path between transmitter and receiver due to their high frequency and directional nature.",
    "correctAnswer": [1]
  },
  {
    "question": "A key limitation of Infrared (IR) waves is that they:",
    "options": ["Are very expensive to generate.", "Require a very large antenna.", "Cannot pass through walls.", "Only work for very long distances."],
    "explanation": "Infrared waves cannot penetrate solid objects like walls, limiting their use to line-of-sight applications within the same room.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following statements about Radio waves is true?",
    "options": ["They are uni-directional.", "They are omni-directional.", "They require a direct line-of-sight.", "They are used for short-range communication only."],
    "explanation": "Radio waves are omni-directional, meaning they can propagate in all directions from the transmitting antenna.",
    "correctAnswer": [1]
  },
  {
    "question": "Wi-Fi and Bluetooth technologies primarily use which type of electromagnetic waves?",
    "options": ["Radio Waves", "Infrared Waves", "Microwaves", "X-rays"],
    "explanation": "Both Wi-Fi and Bluetooth operate in the radio frequency spectrum, using radio waves for wireless communication.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the primary application of satellite communication?",
    "options": ["TV remotes and wireless mice", "Covering very large areas for services like GPS and global broadcasting", "Short-distance data transfer between two devices", "Local FM radio transmission"],
    "explanation": "Satellite communication is primarily used for covering vast geographical areas, providing services like GPS, global broadcasting, and long-distance communication.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the definition of bandwidth?",
    "options": ["The number of cycles a signal completes per second.", "The speed of light in a vacuum.", "The range of frequencies a channel can transmit.", "The time period of one cycle of a signal."],
    "explanation": "Bandwidth is defined as the range of frequencies that a communication channel can effectively transmit.",
    "correctAnswer": [2]
  },
  {
    "question": "If a signal completes 50 cycles in one second, what is its frequency?",
    "options": ["100 Hz", "25 Hz", "50 Hz", "0.02 Hz"],
    "explanation": "Frequency is the number of cycles per second. If a signal completes 50 cycles in one second, its frequency is 50 Hz.",
    "correctAnswer": [2]
  },
  {
    "question": "An audio channel can transmit frequencies between 300 Hz and 3300 Hz. What is its bandwidth?",
    "options": ["3600 Hz", "3300 Hz", "3000 Hz", "300 Hz"],
    "explanation": "Bandwidth is calculated as the difference between the highest and lowest frequencies: 3300 Hz - 300 Hz = 3000 Hz.",
    "correctAnswer": [2]
  },
  {
    "question": "A higher bandwidth in a communication channel generally implies:",
    "options": ["Lower data transfer rate.", "Longer transmission distance.", "Higher data transfer rate.", "Lower noise immunity."],
    "explanation": "Higher bandwidth allows more information to be transmitted per unit time, resulting in higher data transfer rates.",
    "correctAnswer": [2]
  },
  {
    "question": "How is frequency related to the time period (T) of a signal?",
    "options": ["f = T", "f = T²", "f = 1/T", "f = T + 1"],
    "explanation": "Frequency (f) is the reciprocal of time period (T). If T is the time for one cycle, then f = 1/T cycles per second.",
    "correctAnswer": [2]
  },
  {
    "question": "What are the two states of a digital signal?",
    "options": ["High and Medium", "Positive and Negative", "0 (Low) and 1 (High)", "Analog and Continuous"],
    "explanation": "Digital signals have two discrete states: 0 (representing low voltage) and 1 (representing high voltage).",
    "correctAnswer": [2]
  },
  {
    "question": "Which logic gate will have an output of 1 only when all of its inputs are 1?",
    "options": ["OR Gate", "AND Gate", "NOT Gate", "XOR Gate"],
    "explanation": "An AND gate produces an output of 1 only when all of its inputs are 1. If any input is 0, the output is 0.",
    "correctAnswer": [1]
  },
  {
    "question": "NAND and NOR gates are called \"universal gates\" because:",
    "options": ["They are used in all digital devices.", "They are the simplest gates to manufacture.", "Any logical circuit can be built using only these gates.", "They were the first logic gates invented."],
    "explanation": "NAND and NOR gates are called universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates.",
    "correctAnswer": [2]
  },
  {
    "question": "The output of which type of circuit depends on both present inputs and past history?",
    "options": ["Analog Circuit", "Combinational Circuit", "Sequential Circuit", "Logic Gate Circuit"],
    "explanation": "Sequential circuits have memory elements and their output depends on both current inputs and previous state (past history).",
    "correctAnswer": [2]
  },
  {
    "question": "A circuit whose output depends only on the current inputs is known as a:",
    "options": ["Combinational Circuit", "Sequential Circuit", "Flip-Flop", "Register"],
    "explanation": "Combinational circuits have outputs that depend only on the current input values, with no memory of previous states.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the primary purpose of modulation?",
    "options": ["To decrease the bandwidth of a signal.", "To enable long-distance transmission and reduce required antenna size.", "To convert a digital signal to an analog signal.", "To encrypt data for security."],
    "explanation": "Modulation enables efficient long-distance transmission by shifting signal frequency to higher bands and reducing required antenna size.",
    "correctAnswer": [1]
  },
  {
    "question": "In Frequency Modulation (FM), which property of the carrier signal is varied?",
    "options": ["Amplitude", "Frequency", "Phase", "Both Amplitude and Phase"],
    "explanation": "In Frequency Modulation, the frequency of the carrier signal is varied according to the modulating signal while amplitude remains constant.",
    "correctAnswer": [1]
  },
  {
    "question": "Which digital modulation technique changes the frequency of the carrier signal to represent binary 0s and 1s?",
    "options": ["Amplitude Shift Keying (ASK)", "Phase Shift Keying (PSK)", "Frequency Shift Keying (FSK)", "Quadrature Amplitude Modulation (QAM)"],
    "explanation": "Frequency Shift Keying (FSK) uses different frequencies to represent binary 0s and 1s in digital communication.",
    "correctAnswer": [2]
  },
  {
    "question": "What remains constant in Amplitude Modulation (AM)?",
    "options": ["Amplitude and Frequency", "Frequency and Phase", "Amplitude and Phase", "Only the Amplitude"],
    "explanation": "In Amplitude Modulation, the frequency and phase of the carrier remain constant while only the amplitude varies with the modulating signal.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of these modulation techniques is widely used in modern Wi-Fi and 4G/5G systems?",
    "options": ["AM", "FSK", "ASK", "PSK"],
    "explanation": "Phase Shift Keying (PSK) and its variants like QAM (which combines PSK and ASK) are widely used in modern Wi-Fi and cellular systems.",
    "correctAnswer": [3]
  },
  {
    "question": "Which pulse modulation technique is digital?",
    "options": ["Pulse Amplitude Modulation (PAM)", "Pulse Width Modulation (PWM)", "Pulse Code Modulation (PCM)", "Pulse Position Modulation (PPM)"],
    "explanation": "Pulse Code Modulation (PCM) is a digital technique that converts analog signals into binary digital form through sampling, quantization, and encoding.",
    "correctAnswer": [2]
  },
  {
    "question": "In PWM, what property of the pulse is varied according to the modulating signal?",
    "options": ["Amplitude", "Position", "Width (Duration)", "Frequency"],
    "explanation": "In Pulse Width Modulation (PWM), the width or duration of the pulses is varied according to the amplitude of the modulating signal.",
    "correctAnswer": [2]
  },
  {
    "question": "The process of converting an analog signal into a binary stream using sampling, quantization, and encoding is called:",
    "options": ["PAM", "PWM", "PPM", "PCM"],
    "explanation": "Pulse Code Modulation (PCM) is the complete process of converting analog signals to digital form through sampling, quantization, and binary encoding.",
    "correctAnswer": [3]
  },
  {
    "question": "Which technique varies the amplitude of pulses while keeping their width and position constant?",
    "options": ["Pulse Amplitude Modulation (PAM)", "Pulse Width Modulation (PWM)", "Pulse Position Modulation (PPM)", "Pulse Code Modulation (PCM)"],
    "explanation": "Pulse Amplitude Modulation (PAM) varies only the amplitude of pulses while keeping their width and timing position constant.",
    "correctAnswer": [0]
  },
  {
    "question": "If the amplitude and width of pulses remain constant, but their time of occurrence changes, the technique is known as:",
    "options": ["PAM", "PWM", "Pulse Position Modulation (PPM)", "PCM"],
    "explanation": "Pulse Position Modulation (PPM) keeps pulse amplitude and width constant but varies the time position of pulses according to the modulating signal.",
    "correctAnswer": [2]
  },
  {
    "question": "In which multiple access technique are users separated by being assigned different time slots on the same frequency?",
    "options": ["FDMA", "TDMA", "CDMA", "SDMA"],
    "explanation": "Time Division Multiple Access (TDMA) separates users by assigning different time slots to each user on the same frequency channel.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the basis of separation for users in CDMA?",
    "options": ["Different frequencies", "Different time slots", "Unique codes", "Different spatial locations"],
    "explanation": "Code Division Multiple Access (CDMA) separates users by assigning unique spreading codes to each user, allowing simultaneous transmission.",
    "correctAnswer": [2]
  },
  {
    "question": "4G LTE and Wi-Fi 6 networks primarily use which multiple access technique for its high efficiency?",
    "options": ["TDMA", "CDMA", "FDMA", "OFDMA"],
    "explanation": "Orthogonal Frequency Division Multiple Access (OFDMA) is used in 4G LTE and Wi-Fi 6 for its high spectral efficiency and flexibility.",
    "correctAnswer": [3]
  },
  {
    "question": "Which technique assigns a separate frequency band to each user?",
    "options": ["FDMA", "TDMA", "CDMA", "OFDMA"],
    "explanation": "Frequency Division Multiple Access (FDMA) assigns separate frequency bands to different users for simultaneous communication.",
    "correctAnswer": [0]
  },
  {
    "question": "The use of multiple antennas to create separate spatial channels for different users is a characteristic of:",
    "options": ["FDMA", "TDMA", "OFDMA", "SDMA"],
    "explanation": "Space Division Multiple Access (SDMA) uses multiple antennas and spatial processing to create separate channels for different users based on their location.",
    "correctAnswer": [3]
  },
  {
    "question": "What are the two main components of a Mobile Station (MS)?",
    "options": ["Antenna and Battery", "Mobile Equipment (ME) and SIM card", "Base Transceiver Station (BTS) and Base Station Controller (BSC)", "Mobile Switching Center (MSC) and VLR"],
    "explanation": "A Mobile Station consists of Mobile Equipment (the physical device) and SIM card (subscriber identity module for authentication).",
    "correctAnswer": [1]
  },
  {
    "question": "The process of reusing the same frequencies in different cells that are sufficiently far apart is known as:",
    "options": ["Handover", "Modulation", "Frequency Reuse", "Multiplexing"],
    "explanation": "Frequency Reuse allows the same frequencies to be used in non-adjacent cells, maximizing spectrum efficiency in cellular networks.",
    "correctAnswer": [2]
  },
  {
    "question": "What is a handover in a cellular network?",
    "options": ["The initial connection of a call.", "The process of switching the phone off and on.", "The process of transferring an active call from one base station to another.", "The allocation of a frequency channel to a user."],
    "explanation": "Handover is the process of transferring an ongoing call or data session from one base station to another as the mobile user moves.",
    "correctAnswer": [2]
  },
  {
    "question": "A \"break before make\" handover, where the old connection is dropped before the new one is established, is called:",
    "options": ["Soft Handover", "Hard Handover", "Fast Handover", "Seamless Handover"],
    "explanation": "Hard Handover follows 'break before make' principle where the old connection is terminated before establishing the new connection.",
    "correctAnswer": [1]
  },
  {
    "question": "Which component of the Base Station is responsible for managing multiple BTSs and handovers?",
    "options": ["Mobile Station (MS)", "Mobile Switching Center (MSC)", "Base Transceiver Station (BTS)", "Base Station Controller (BSC)"],
    "explanation": "Base Station Controller (BSC) manages multiple Base Transceiver Stations (BTS) and handles handover decisions and radio resource management.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the following is a guided/bounded transmission medium?",
    "options": ["Radio waves", "Satellite communication", "Coaxial cable", "Infrared"],
    "explanation": "Coaxial cable is a guided transmission medium that provides a physical path for signal transmission with good shielding properties.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the main advantage of optical fiber cable?",
    "options": ["Cheapest", "Highest data transfer speed", "Uses electric signals", "Susceptible to noise"],
    "explanation": "Optical fiber's main advantage is its highest data transfer speed among all transmission media, along with immunity to electromagnetic interference.",
    "correctAnswer": [1]
  },
  {
    "question": "Which wireless medium requires line-of-sight?",
    "options": ["Optical fiber", "UTP cable", "Microwave", "Coaxial cable"],
    "explanation": "Microwave communication requires line-of-sight transmission due to its high frequency and directional propagation characteristics.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is true about Infrared Waves?",
    "options": ["Can be used for long-distance communication", "Cannot pass through walls", "Used in TV broadcasting", "Used in fiber optics"],
    "explanation": "Infrared waves cannot penetrate solid objects like walls, limiting their application to line-of-sight communication within enclosed spaces.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the typical frequency range of radio waves used in communication?",
    "options": ["1 Hz – 300 Hz", "3 kHz – GHz", "300 GHz – 400 THz", "88 MHz – 108 MHz"],
    "explanation": "Radio waves used in communication typically range from 3 kHz to several GHz, covering various applications from AM radio to cellular communication.",
    "correctAnswer": [1]
  },
  {
    "question": "Which logic gate outputs 1 only if all its inputs are 1?",
    "options": ["OR", "NOT", "AND", "NAND"],
    "explanation": "The AND gate produces an output of 1 only when all of its inputs are 1. If any input is 0, the output becomes 0.",
    "correctAnswer": [2]
  },
  {
    "question": "Which is a universal gate?",
    "options": ["AND", "NAND", "OR", "XOR"],
    "explanation": "NAND is a universal gate because any Boolean logic function can be implemented using only NAND gates.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the output of a NOT gate if the input is 0?",
    "options": ["0", "1", "undefined", "doesn't change"],
    "explanation": "A NOT gate inverts its input. If the input is 0, the output is 1, and if the input is 1, the output is 0.",
    "correctAnswer": [1]
  },
  {
    "question": "Which application does NOT commonly use digital electronics?",
    "options": ["Robots", "Typewriters", "Mobile phones", "Computers"],
    "explanation": "Traditional typewriters are mechanical devices that do not commonly use digital electronics, unlike robots, mobile phones, and computers.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the value of binary 1011 in decimal?",
    "options": ["10", "11", "8", "15"],
    "explanation": "Binary 1011 = 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11 in decimal.",
    "correctAnswer": [1]
  },
  {
    "question": "The unit of frequency is:",
    "options": ["Newton", "Hertz", "Meter", "Tesla"],
    "explanation": "Frequency is measured in Hertz (Hz), which represents the number of cycles per second, named after Heinrich Hertz.",
    "correctAnswer": [1]
  },
  {
    "question": "If a channel passes frequencies between 500 Hz and 2500 Hz, what is its bandwidth?",
    "options": ["2000 Hz", "2500 Hz", "500 Hz", "3000 Hz"],
    "explanation": "Bandwidth is the difference between the highest and lowest frequencies: 2500 Hz - 500 Hz = 2000 Hz.",
    "correctAnswer": [0]
  },
  {
    "question": "Higher bandwidth results in:",
    "options": ["Lower data transfer rate", "Higher data transfer rate", "More noise only", "None of the above"],
    "explanation": "Higher bandwidth allows more information to be transmitted simultaneously, resulting in higher data transfer rates.",
    "correctAnswer": [1]
  },
  {
    "question": "Modulation is needed to:",
    "options": ["Increase antenna size", "Enable long-distance transmission", "Convert analog to digital", "Reduce bandwidth"],
    "explanation": "Modulation enables efficient long-distance transmission by shifting signals to higher frequencies and reducing antenna size requirements.",
    "correctAnswer": [1]
  },
  {
    "question": "In Amplitude Modulation (AM), which property of the carrier changes?",
    "options": ["Frequency", "Amplitude", "Phase", "Bandwidth"],
    "explanation": "In Amplitude Modulation, the amplitude of the carrier signal varies according to the modulating signal while frequency and phase remain constant.",
    "correctAnswer": [1]
  },
  {
    "question": "Frequency Modulation (FM) is widely used for:",
    "options": ["TV video", "FM Radio", "Satellite communication", "Wi-Fi only"],
    "explanation": "Frequency Modulation (FM) is widely used for FM radio broadcasting due to its better noise immunity compared to AM.",
    "correctAnswer": [1]
  },
  {
    "question": "Which digital modulation changes the frequency of the carrier according to data?",
    "options": ["ASK", "FSK", "PSK", "QAM"],
    "explanation": "Frequency Shift Keying (FSK) changes the frequency of the carrier signal to represent different binary data values.",
    "correctAnswer": [1]
  },
  {
    "question": "Pulse Amplitude Modulation (PAM) is:",
    "options": ["Analog pulse modulation", "Digital pulse modulation", "Frequency domain", "Space domain"],
    "explanation": "PAM is an analog pulse modulation technique where the amplitude of pulses varies with the analog signal amplitude.",
    "correctAnswer": [0]
  },
  {
    "question": "Which step is NOT part of PCM?",
    "options": ["Sampling", "Quantization", "Encoding", "Multiplexing"],
    "explanation": "PCM consists of sampling, quantization, and encoding. Multiplexing is a separate technique for combining multiple signals.",
    "correctAnswer": [3]
  },
  {
    "question": "Where are PWM techniques commonly used?",
    "options": ["Wi-Fi", "Motor control", "TV broadcasting", "GPS"],
    "explanation": "Pulse Width Modulation (PWM) is commonly used in motor control applications to vary motor speed by controlling the duty cycle.",
    "correctAnswer": [1]
  },
  {
    "question": "Which multiple access technique uses time slots for different users?",
    "options": ["FDMA", "TDMA", "CDMA", "SDMA"],
    "explanation": "Time Division Multiple Access (TDMA) assigns different time slots to different users on the same frequency channel.",
    "correctAnswer": [1]
  },
  {
    "question": "Which technique separates users by code?",
    "options": ["FDMA", "TDMA", "CDMA", "SDMA"],
    "explanation": "Code Division Multiple Access (CDMA) separates users by assigning unique spreading codes to each user for identification.",
    "correctAnswer": [2]
  },
  {
    "question": "OFDMA is an advanced version of:",
    "options": ["FDMA", "TDMA", "SDMA", "CDMA"],
    "explanation": "Orthogonal Frequency Division Multiple Access (OFDMA) is an advanced version of FDMA that uses orthogonal subcarriers for efficient spectrum utilization.",
    "correctAnswer": [0]
  },
  {
    "question": "SDMA primarily relies on:",
    "options": ["Frequency bands", "Time division", "Multiple antennas/spatial separation", "Codes"],
    "explanation": "Space Division Multiple Access (SDMA) primarily relies on multiple antennas and spatial separation to create different channels for users based on their physical location.",
    "correctAnswer": [2]
  },
  {
    "question": "QAM combines:",
    "options": ["Amplitude and frequency modulation", "Amplitude and phase modulation", "Frequency and phase modulation", "None of these"],
    "explanation": "Quadrature Amplitude Modulation (QAM) combines both amplitude and phase modulation to achieve higher data rates.",
    "correctAnswer": [1]
  },
  {
    "question": "64-QAM can represent how many bits per symbol?",
    "options": ["4 bits", "6 bits", "2 bits", "8 bits"],
    "explanation": "64-QAM has 64 different symbol states, which can represent 6 bits per symbol (2^6 = 64).",
    "correctAnswer": [1]
  },
  {
    "question": "Which is a key advantage of higher-order QAM?",
    "options": ["Lower data rates", "High noise immunity always", "Higher data rates with better SNR", "Simple receiver"],
    "explanation": "Higher-order QAM provides higher data rates when signal-to-noise ratio (SNR) is sufficient, allowing more bits per symbol transmission.",
    "correctAnswer": [2]
  },
  {
    "question": "QAM is NOT commonly used in:",
    "options": ["Wi-Fi", "4G LTE", "Cable TV", "Analog telephone lines"],
    "explanation": "QAM is a digital modulation technique and is not used in traditional analog telephone lines, which use analog signaling.",
    "correctAnswer": [3]
  },
  {
    "question": "What does the Mobile Station (MS) consist of?",
    "options": ["Only the SIM card", "Base Station equipment", "Mobile Equipment (ME) and SIM card", "MSC"],
    "explanation": "A Mobile Station (MS) consists of two main components: Mobile Equipment (the physical device) and SIM card (subscriber identity).",
    "correctAnswer": [2]
  },
  {
    "question": "The central controller in a mobile network is:",
    "options": ["BTS", "BSC", "MSC", "SIM"],
    "explanation": "Mobile Switching Center (MSC) is the central controller in a mobile network that handles call switching, routing, and network management.",
    "correctAnswer": [2]
  },
  {
    "question": "What is Frequency Reuse used for?",
    "options": ["Saving electrical power", "Encrypting data", "Maximizing spectrum efficiency and capacity", "Downlink communication only"],
    "explanation": "Frequency Reuse is used to maximize spectrum efficiency and network capacity by reusing the same frequencies in non-adjacent cells.",
    "correctAnswer": [2]
  }
],
    assignment:[
  {
    "question": "Which technology is primarily used for wireless local area networks?",
    "options": [
      "WiFi",
      "Bluetooth", 
      "NFC",
      "Infrared"
    ],
    "explanation": "WiFi (Wireless Fidelity) is the primary technology used for wireless local area networks (WLANs). It allows devices to connect to a network and access the internet wirelessly within a certain range of a router or access point.",
    "correctAnswer": [0]
  },
  {
    "question": "What does 1G primarily support?",
    "options": [
      "Digital voice",
      "Analog voice",
      "High-speed data",
      "Video streaming"
    ],
    "explanation": "1G networks were the first generation of cellular systems and they supported analog voice communication only.",
    "correctAnswer": [1]
  },
  {
    "question": "Which generation introduced SMS (Short Message Service)?",
    "options": [
      "1G",
      "2G",
      "3G",
      "4G"
    ],
    "explanation": "2G networks introduced digital communication and supported SMS (text messaging) as a new service.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT a multiple access technique?",
    "options": [
      "FDMA",
      "TDMA",
      "CDMA",
      "HDMI"
    ],
    "explanation": "FDMA, TDMA, and CDMA are multiple access techniques, while HDMI is a wired display interface, not used in wireless communication.",
    "correctAnswer": [3]
  },
  {
    "question": "Which modulation technique is most resistant to noise?",
    "options": [
      "Amplitude Shift Keying (ASK)",
      "Frequency Shift Keying (FSK)",
      "Phase Shift Keying (PSK)",
      "Quadrature Amplitude Modulation (QAM)"
    ],
    "explanation": "Frequency Shift Keying (FSK) is generally more resistant to noise compared to ASK and PSK because frequency variations are less affected by amplitude noise.",
    "correctAnswer": [1]
  },
  {
    "question": "What does LTE stand for?",
    "options": [
      "Long Term Evolution",
      "Low Transmission Efficiency",
      "Local Telecommunication Exchange",
      "Linear Technology Enhancement"
    ],
    "explanation": "LTE stands for Long Term Evolution and is the standard for 4G wireless broadband technology.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the key technology that makes 5G ultra-reliable and low-latency?",
    "options": [
      "Beamforming",
      "URLLC",
      "MIMO",
      "HARQ"
    ],
    "explanation": "Ultra-Reliable Low Latency Communication (URLLC) is one of the main features of 5G that enables applications like autonomous driving and remote surgery.",
    "correctAnswer": [1]
  },
  {
    "question": "Which frequency band is commonly used for WiFi?",
    "options": [
      "900 MHz",
      "1.8 GHz",
      "2.4 GHz",
      "700 MHz"
    ],
    "explanation": "WiFi commonly operates in the 2.4 GHz and 5 GHz bands.",
    "correctAnswer": [2]
  },
  {
    "question": "What does OFDM stand for?",
    "options": [
      "Orthogonal Frequency Division Multiplexing",
      "Optical Frequency Data Management",
      "Online Frequency Division Model",
      "Orthogonal Frame Data Modulation"
    ],
    "explanation": "OFDM stands for Orthogonal Frequency Division Multiplexing, a modulation scheme used in LTE and 5G.",
    "correctAnswer": [0]
  },
  {
    "question": "Which cellular generation first introduced mobile internet browsing?",
    "options": [
      "1G",
      "2G",
      "3G",
      "4G"
    ],
    "explanation": "3G networks introduced mobile internet browsing and video calling features.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is a coding technique used in LTE?",
    "options": [
      "Turbo Codes",
      "Huffman Coding",
      "Run-Length Encoding",
      "Shannon Coding"
    ],
    "explanation": "LTE uses Turbo Codes (and LDPC in later versions) for error correction.",
    "correctAnswer": [0]
  },
  {
    "question": "Which multiple access technology is used in LTE?",
    "options": [
      "TDMA",
      "OFDMA",
      "FDMA",
      "CDMA"
    ],
    "explanation": "LTE uses Orthogonal Frequency Division Multiple Access (OFDMA) for downlink transmission.",
    "correctAnswer": [1]
  },
  {
    "question": "Which term refers to the reuse of the same frequency in non-adjacent cells?",
    "options": [
      "Frequency Hopping",
      "Frequency Reuse",
      "Frequency Modulation",
      "Frequency Allocation"
    ],
    "explanation": "Frequency Reuse allows efficient use of spectrum by assigning the same frequencies to different cells that are far enough apart.",
    "correctAnswer": [1]
  },
  {
    "question": "Which antenna technology improves reliability by reducing fading?",
    "options": [
      "Beamforming",
      "Diversity",
      "Array Gain",
      "Spatial Multiplexing"
    ],
    "explanation": "Diversity techniques use multiple antennas to receive signals over different paths, reducing the impact of fading.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the main role of HARQ in LTE?",
    "options": [
      "Scheduling",
      "Error correction with retransmission",
      "Handover",
      "Modulation adaptation"
    ],
    "explanation": "HARQ (Hybrid Automatic Repeat reQuest) combines error correction with retransmission to ensure reliable communication.",
    "correctAnswer": [1]
  },
  
  {
    "question": "Which cellular generation is based entirely on IP (Internet Protocol) networks?",
    "options": [
      "2G",
      "3G",
      "4G",
      "5G"
    ],
    "explanation": "4G LTE is the first generation of mobile networks designed entirely for IP-based communication, supporting VoIP and high-speed data.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is an example of a short-range wireless communication technology?",
    "options": [
      "WiMAX",
      "Bluetooth",
      "LTE",
      "5G NR"
    ],
    "explanation": "Bluetooth is designed for short-range wireless communication, typically within 10 meters.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the main advantage of MIMO technology?",
    "options": [
      "Lower frequency usage",
      "Higher data rate and reliability",
      "Reduced power consumption",
      "Simpler antenna design"
    ],
    "explanation": "MIMO (Multiple Input Multiple Output) increases throughput and reliability by using multiple antennas for spatial multiplexing and diversity.",
    "correctAnswer": [1]
  },
  {
    "question": "Which frequency band is mostly used for 5G mmWave communication?",
    "options": [
      "Sub-1 GHz",
      "2.4 GHz",
      "24–100 GHz",
      "700 MHz"
    ],
    "explanation": "5G mmWave operates in very high-frequency bands, typically 24–100 GHz, to achieve extremely high data rates.",
    "correctAnswer": [2]
  },
  {
    "question": "Which modulation is commonly used in LTE?",
    "options": [
      "BPSK",
      "QPSK, 16QAM, 64QAM",
      "FSK",
      "ASK"
    ],
    "explanation": "LTE uses adaptive modulation such as QPSK, 16QAM, and 64QAM depending on channel quality.",
    "correctAnswer": [1]
  },
  {
    "question": "What does 'handover' mean in wireless networks?",
    "options": [
      "Switching from one device to another",
      "Changing frequency bands",
      "Transferring an active call/data session between cells",
      "Allocating spectrum dynamically"
    ],
    "explanation": "Handover is the process of transferring an ongoing call or data session from one cell to another to maintain connectivity.",
    "correctAnswer": [2]
  },
  {
    "question": "Which multiple access scheme is used in 5G?",
    "options": [
      "OFDMA",
      "TDMA",
      "FDMA",
      "SDMA"
    ],
    "explanation": "5G uses OFDMA (Orthogonal Frequency Division Multiple Access) for both uplink and downlink, enabling flexible resource allocation.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following is an advantage of frequency reuse?",
    "options": [
      "Reduced latency",
      "Increased capacity",
      "Improved modulation",
      "Reduced antenna cost"
    ],
    "explanation": "Frequency reuse allows the same frequencies to be used in different cells, thereby increasing overall network capacity.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the main function of error-correcting codes?",
    "options": [
      "Increase transmission power",
      "Reduce transmission delay",
      "Detect and correct errors",
      "Enhance antenna gain"
    ],
    "explanation": "Error-correcting codes improve reliability by detecting and correcting bit errors caused by noise and interference.",
    "correctAnswer": [2]
  },
  {
    "question": "Which type of antenna is commonly used in mobile phones?",
    "options": [
      "Parabolic dish",
      "Monopole",
      "Yagi-Uda",
      "Horn antenna"
    ],
    "explanation": "Mobile phones typically use compact monopole or patch antennas that are small and efficient.",
    "correctAnswer": [1]
  },
  {
    "question": "Which term refers to allocating time slots to users?",
    "options": [
      "FDMA",
      "TDMA",
      "CDMA",
      "OFDMA"
    ],
    "explanation": "TDMA (Time Division Multiple Access) divides a channel into time slots allocated to different users.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT a service provided by LTE?",
    "options": [
      "VoLTE",
      "Video Streaming",
      "Online Gaming",
      "Analog Voice Calls"
    ],
    "explanation": "LTE is a fully digital network and does not support analog voice calls.",
    "correctAnswer": [3]
  },
  {
    "question": "Which 3G technology was widely used in Europe and Asia?",
    "options": [
      "CDMA2000",
      "UMTS (WCDMA)",
      "WiMAX",
      "GSM"
    ],
    "explanation": "UMTS (Universal Mobile Telecommunications System) based on WCDMA was the standard 3G technology in Europe and Asia.",
    "correctAnswer": [1]
  },
  {
    "question": "What does 'spectrum efficiency' mean?",
    "options": [
      "Power saving in base stations",
      "Efficient use of frequency spectrum to maximize data rate per Hz",
      "Reducing antenna size",
      "Minimizing delay"
    ],
    "explanation": "Spectrum efficiency refers to the ability to transmit the maximum possible data rate within a given bandwidth.",
    "correctAnswer": [1]
  },
  {
    "question": "What does QoS stand for in wireless networks?",
    "options": [
      "Quality of Security",
      "Quality of Service",
      "Quantity of Spectrum",
      "Queue of Signals"
    ],
    "explanation": "QoS (Quality of Service) refers to network performance guarantees like bandwidth, delay, and jitter for different applications.",
    "correctAnswer": [1]
  },
  {
    "question": "Which technology introduced packet switching in mobile networks?",
    "options": [
      "2G",
      "2.5G (GPRS)",
      "3G",
      "4G"
    ],
    "explanation": "2.5G (GPRS) introduced packet-switched data services on top of 2G networks.",
    "correctAnswer": [1]
  },
  {
    "question": "Which antenna technique is used to direct signals toward specific users?",
    "options": [
      "Diversity",
      "Beamforming",
      "MIMO",
      "HARQ"
    ],
    "explanation": "Beamforming directs signals toward a user to improve signal strength and reduce interference.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is NOT an application of 5G?",
    "options": [
      "Autonomous Vehicles",
      "IoT (Internet of Things)",
      "Remote Surgery",
      "Analog TV Broadcasting"
    ],
    "explanation": "5G supports advanced applications like IoT, autonomous driving, and remote surgery but not analog TV broadcasting.",
    "correctAnswer": [3]
  },
  {
    "question": "What is the purpose of adaptive modulation in LTE?",
    "options": [
      "Increase antenna gain",
      "Adjust data rate based on channel quality",
      "Reduce handover delay",
      "Improve voice clarity"
    ],
    "explanation": "Adaptive modulation adjusts the modulation scheme depending on channel quality, balancing speed and reliability.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is true about 3G networks?",
    "options": [
      "They only support analog voice",
      "They introduced broadband internet",
      "They are IP-only networks",
      "They use mmWave frequencies"
    ],
    "explanation": "3G networks introduced broadband mobile internet and video calling, but were not fully IP-based.",
    "correctAnswer": [1]
  },
  {
    "question": "Which component of LTE handles mobility management and IP connectivity?",
    "options": [
      "E-UTRAN",
      "eNodeB",
      "EPC",
      "HARQ"
    ],
    "explanation": "The EPC (Evolved Packet Core) handles mobility management, IP connectivity, and authentication in LTE networks.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the typical latency target of 5G URLLC?",
    "options": [
      "100 ms",
      "10 ms",
      "1 ms",
      "50 ms"
    ],
    "explanation": "5G URLLC (Ultra Reliable Low Latency Communication) aims for latency as low as 1 ms.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of these technologies is backward-compatible with GSM networks?",
    "options": [
      "UMTS",
      "WiMAX",
      "5G NR",
      "LoRa"
    ],
    "explanation": "UMTS (3G) was designed to be backward-compatible with GSM networks for easier migration.",
    "correctAnswer": [0]
  },
  {
    "question": "Which type of multiplexing is used in OFDM?",
    "options": [
      "Time Division",
      "Frequency Division",
      "Orthogonal Frequency Division",
      "Code Division"
    ],
    "explanation": "OFDM uses orthogonal frequency division, splitting the bandwidth into many orthogonal subcarriers.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is a limitation of mmWave communication?",
    "options": [
      "Low capacity",
      "High latency",
      "Poor penetration through obstacles",
      "Lack of modulation schemes"
    ],
    "explanation": "mmWave signals cannot easily penetrate obstacles like walls or trees, limiting coverage.",
    "correctAnswer": [2]
  },
  {
    "question": "Which coding method is being adopted in 5G NR for error correction?",
    "options": [
      "Turbo Codes",
      "Reed-Solomon",
      "LDPC and Polar Codes",
      "Hamming Codes"
    ],
    "explanation": "5G NR adopts LDPC for data channels and Polar Codes for control channels.",
    "correctAnswer": [2]
  },
  {
    "question": "Which multiple access technique allows all users to transmit simultaneously using different codes?",
    "options": [
      "FDMA",
      "TDMA",
      "CDMA",
      "OFDMA"
    ],
    "explanation": "CDMA allows multiple users to share the same spectrum simultaneously by assigning unique codes.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is the main challenge in wireless communication?",
    "options": [
      "Multipath fading",
      "High bandwidth",
      "Mobility",
      "Large coverage area"
    ],
    "explanation": "Multipath fading causes signal distortion due to reflections, making reliable wireless communication challenging.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the main benefit of cell splitting in wireless networks?",
    "options": [
      "Increased coverage",
      "Increased capacity",
      "Reduced interference",
      "Lower frequency usage"
    ],
    "explanation": "Cell splitting increases capacity by creating smaller cells that can handle more users.",
    "correctAnswer": [1]
  },
  {
    "question": "Which access technique divides spectrum into frequency bands?",
    "options": [
      "FDMA",
      "TDMA",
      "CDMA",
      "OFDMA"
    ],
    "explanation": "FDMA (Frequency Division Multiple Access) assigns distinct frequency bands to different users.",
    "correctAnswer": [0]
  },
  {
    "question": "Which part of LTE handles radio communication with mobile devices?",
    "options": [
      "EPC",
      "MME",
      "E-UTRAN",
      "SGW"
    ],
    "explanation": "E-UTRAN (Evolved Universal Terrestrial Radio Access Network) manages the radio interface between user devices and the LTE network.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the main limitation of 2G networks?",
    "options": [
      "No support for voice",
      "Low data rates",
      "High latency",
      "No mobility"
    ],
    "explanation": "2G networks had very low data rates and were mainly designed for voice and SMS services.",
    "correctAnswer": [1]
  },
  {
    "question": "Which technique improves coverage by combining signals from multiple antennas?",
    "options": [
      "Spatial Multiplexing",
      "Diversity",
      "OFDMA",
      "Beamforming"
    ],
    "explanation": "Diversity techniques improve coverage and reliability by combining signals from multiple antennas.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the maximum modulation scheme used in standard LTE?",
    "options": [
      "QPSK",
      "16QAM",
      "64QAM",
      "256QAM"
    ],
    "explanation": "Standard LTE supports up to 64QAM modulation, while LTE-Advanced introduced 256QAM.",
    "correctAnswer": [2]
  },
  {
    "question": "Which service requires the lowest latency?",
    "options": [
      "File downloads",
      "Email",
      "Remote surgery",
      "Video streaming"
    ],
    "explanation": "Remote surgery requires ultra-low latency to ensure immediate response and precision.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the main function of a base station in a cellular system?",
    "options": [
      "Provide internet backbone",
      "Manage user mobility and radio access",
      "Generate modulation schemes",
      "Allocate IP addresses"
    ],
    "explanation": "The base station (eNodeB in LTE) handles radio communication, user mobility, and resource allocation.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is the key feature of 5G massive MIMO?",
    "options": [
      "High latency",
      "Multiple antennas serving many users",
      "Analog-only signals",
      "Reduced frequency reuse"
    ],
    "explanation": "Massive MIMO in 5G uses many antennas to serve multiple users simultaneously with high efficiency.",
    "correctAnswer": [1]
  },
  {
    "question": "Which network parameter is measured in bits per second per Hz?",
    "options": [
      "Latency",
      "Throughput",
      "Spectral efficiency",
      "Bandwidth"
    ],
    "explanation": "Spectral efficiency measures how efficiently bandwidth is used, in bps/Hz.",
    "correctAnswer": [2]
  },
  {
    "question": "Which 5G service type supports IoT devices with low power and massive connectivity?",
    "options": [
      "eMBB",
      "URLLC",
      "mMTC",
      "VoLTE"
    ],
    "explanation": "mMTC (Massive Machine-Type Communication) enables connectivity for billions of IoT devices.",
    "correctAnswer": [2]
  },
  {
    "question": "Which wireless standard is often called WiMAX?",
    "options": [
      "IEEE 802.11",
      "IEEE 802.15",
      "IEEE 802.16",
      "IEEE 802.3"
    ],
    "explanation": "WiMAX is based on the IEEE 802.16 standard for broadband wireless access.",
    "correctAnswer": [2]
  },
  {
    "question": "Which cellular generation first introduced video calling?",
    "options": [
      "2G",
      "3G",
      "4G",
      "5G"
    ],
    "explanation": "3G networks introduced video calling and mobile internet browsing.",
    "correctAnswer": [1]
  },
  {
    "question": "Which wireless channel phenomenon causes signal copies to arrive at different times?",
    "options": [
      "Interference",
      "Multipath",
      "Fading",
      "Diversity"
    ],
    "explanation": "Multipath occurs when signal copies reflect off obstacles and arrive at the receiver at slightly different times.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of these is NOT a core feature of 5G?",
    "options": [
      "Enhanced Mobile Broadband",
      "Ultra-Reliable Low Latency Communication",
      "Massive Machine-Type Communication",
      "Analog Voice Transmission"
    ],
    "explanation": "5G focuses on eMBB, URLLC, and mMTC. Analog voice is not part of 5G.",
    "correctAnswer": [3]
  },
  {
    "question": "Which part of the electromagnetic spectrum is typically used for mobile communication?",
    "options": [
      "Gamma rays",
      "Microwave and radio frequencies",
      "Infrared",
      "X-rays"
    ],
    "explanation": "Mobile communication mainly uses radio and microwave frequencies ranging from hundreds of MHz to a few GHz.",
    "correctAnswer": [1]
  },
  {
    "question": "Which multiple access technique divides users into orthogonal subcarriers?",
    "options": [
      "CDMA",
      "FDMA",
      "TDMA",
      "OFDMA"
    ],
    "explanation": "OFDMA divides spectrum into orthogonal subcarriers, each assigned to different users.",
    "correctAnswer": [3]
  },
  {
      "question": "What is the fundamental purpose of modulation in communication systems?",
      "options": [
        "To increase signal power",
        "To adapt information signal for transmission",
        "To reduce noise",
        "To compress data"
      ],
      "explanation": "Modulation adapts the information signal to make it suitable for transmission over the communication channel by varying carrier wave properties.",
      "correctAnswer": [1]
    },
    {
      "question": "Which type of cable uses light pulses for data transmission?",
      "options": [
        "Coaxial cable",
        "Twisted pair",
        "Optical fiber",
        "HDMI cable"
      ],
      "explanation": "Optical fiber cables transmit data using light pulses, providing high bandwidth and immunity to electromagnetic interference.",
      "correctAnswer": [2]
    },
    {
      "question": "In which frequency band is FM radio primarily transmitted?",
      "options": [
        "LF (Low Frequency)",
        "VHF (Very High Frequency)",
        "UHF (Ultra High Frequency)",
        "SHF (Super High Frequency)"
      ],
      "explanation": "FM radio broadcasting primarily uses the VHF band, typically between 88-108 MHz.",
      "correctAnswer": [1]
    },
    {
      "question": "What does BPSK stand for?",
      "options": [
        "Binary Phase Shift Keying",
        "Broadband Phase Shift Keying",
        "Basic Phase Shift Keying",
        "Balanced Phase Shift Keying"
      ],
      "explanation": "BPSK stands for Binary Phase Shift Keying, a digital modulation technique using two phase states.",
      "correctAnswer": [0]
    },
    {
      "question": "Which multiple access technique uses unique codes for each user?",
      "options": [
        "FDMA",
        "TDMA",
        "CDMA",
        "OFDMA"
      ],
      "explanation": "CDMA (Code Division Multiple Access) assigns unique spreading codes to each user for simultaneous transmission.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main advantage of digital signals over analog signals?",
      "options": [
        "Simpler circuits",
        "Lower bandwidth requirement",
        "Better noise immunity",
        "Cheaper implementation"
      ],
      "explanation": "Digital signals offer better noise immunity and can be regenerated without cumulative degradation.",
      "correctAnswer": [2]
    },
    {
      "question": "Which component is responsible for mobility management in 5G core?",
      "options": [
        "SMF",
        "UPF",
        "AMF",
        "gNodeB"
      ],
      "explanation": "AMF (Access and Mobility Management Function) handles mobility management in 5G core networks.",
      "correctAnswer": [2]
    },
    {
      "question": "What does QAM modulation vary to encode data?",
      "options": [
        "Only amplitude",
        "Only phase",
        "Both amplitude and phase",
        "Only frequency"
      ],
      "explanation": "QAM (Quadrature Amplitude Modulation) varies both amplitude and phase of the carrier to encode multiple bits per symbol.",
      "correctAnswer": [2]
    },
    {
      "question": "In cellular systems, what is the purpose of handoff?",
      "options": [
        "To increase signal strength",
        "To maintain connection as user moves between cells",
        "To reduce interference",
        "To save battery power"
      ],
      "explanation": "Handoff ensures seamless connectivity as mobile users move from one cell coverage area to another.",
      "correctAnswer": [1]
    },
    {
      "question": "Which 5G use case requires ultra-low latency?",
      "options": [
        "eMBB",
        "URLLC",
        "mMTC",
        "All of the above"
      ],
      "explanation": "URLLC (Ultra-Reliable Low-Latency Communication) is specifically designed for applications requiring very low latency.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the bandwidth of an AM signal compared to the modulating frequency?",
      "options": [
        "Equal to modulating frequency",
        "Twice the modulating frequency",
        "Half the modulating frequency",
        "Four times the modulating frequency"
      ],
      "explanation": "The bandwidth of an AM signal is twice the highest modulating frequency due to upper and lower sidebands.",
      "correctAnswer": [1]
    },
    {
      "question": "Which electromagnetic waves have the lowest frequency?",
      "options": [
        "Radio waves",
        "Microwaves",
        "Infrared",
        "Visible light"
      ],
      "explanation": "Radio waves have the lowest frequency in the electromagnetic spectrum used for communication.",
      "correctAnswer": [0]
    },
    {
      "question": "What does sectoring achieve in cellular systems?",
      "options": [
        "Reduces cell size",
        "Increases capacity and reduces interference",
        "Eliminates handoffs",
        "Increases transmission power"
      ],
      "explanation": "Sectoring divides cells into sectors using directional antennas to increase capacity and reduce interference.",
      "correctAnswer": [1]
    },
    {
      "question": "Which is NOT a basic component of a communication system?",
      "options": [
        "Transmitter",
        "Receiver",
        "Channel",
        "Modulator"
      ],
      "explanation": "While modulators are important, the three basic components are transmitter, channel, and receiver.",
      "correctAnswer": [3]
    },
    {
      "question": "What type of modulation is least affected by noise?",
      "options": [
        "AM",
        "FM",
        "PM",
        "All are equally affected"
      ],
      "explanation": "FM is less affected by noise because noise typically affects amplitude rather than frequency.",
      "correctAnswer": [1]
    },
    {
      "question": "In QPSK, how many bits are transmitted per symbol?",
      "options": [
        "1",
        "2",
        "4",
        "8"
      ],
      "explanation": "QPSK (Quadrature Phase Shift Keying) uses four phase states to transmit 2 bits per symbol.",
      "correctAnswer": [1]
    },
    {
      "question": "Which access technique allows frequency reuse?",
      "options": [
        "FDMA only",
        "TDMA only",
        "CDMA only",
        "All multiple access techniques"
      ],
      "explanation": "All multiple access techniques can implement frequency reuse in cellular systems to increase spectrum efficiency.",
      "correctAnswer": [3]
    },
    {
      "question": "What is the primary advantage of optical fiber communication?",
      "options": [
        "Low cost",
        "Easy installation",
        "High bandwidth and low loss",
        "No need for repeaters"
      ],
      "explanation": "Optical fiber provides very high bandwidth, low transmission loss, and immunity to electromagnetic interference.",
      "correctAnswer": [2]
    },
    {
      "question": "Which generation introduced packet-switched networks for mobile communication?",
      "options": [
        "2G",
        "3G",
        "4G",
        "5G"
      ],
      "explanation": "3G was the first generation to introduce packet-switched networks for mobile data communication.",
      "correctAnswer": [1]
    },
    {
      "question": "What does NSA stand for in 5G deployment?",
      "options": [
        "New Service Architecture",
        "Non-Standalone",
        "Network Service Access",
        "Next Stage Architecture"
      ],
      "explanation": "NSA stands for Non-Standalone, referring to 5G deployment that relies on existing 4G infrastructure.",
      "correctAnswer": [1]
    },
    {
      "question": "Which component handles user data routing in 5G core?",
      "options": [
        "AMF",
        "SMF",
        "UPF",
        "gNodeB"
      ],
      "explanation": "UPF (User Plane Function) handles user data packet routing and forwarding in 5G core networks.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main characteristic of analog signals?",
      "options": [
        "Discrete values",
        "Continuous variation",
        "Binary representation",
        "Digital encoding"
      ],
      "explanation": "Analog signals are characterized by continuous variation in both time and amplitude.",
      "correctAnswer": [1]
    },
    {
      "question": "Which wireless technology is best for short-range communication?",
      "options": [
        "Wi-Fi",
        "Bluetooth",
        "LTE",
        "Satellite"
      ],
      "explanation": "Bluetooth is designed for short-range, low-power device-to-device communication.",
      "correctAnswer": [1]
    },
    {
      "question": "What does mMTC primarily support?",
      "options": [
        "High-speed internet",
        "Voice calls",
        "IoT devices",
        "Video streaming"
      ],
      "explanation": "mMTC (Massive Machine-Type Communication) is designed to support massive numbers of IoT devices.",
      "correctAnswer": [2]
    },
    {
      "question": "Which modulation parameter remains constant in AM?",
      "options": [
        "Amplitude",
        "Frequency",
        "Phase",
        "Power"
      ],
      "explanation": "In AM (Amplitude Modulation), the frequency of the carrier wave remains constant while amplitude varies.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the speed of light in vacuum?",
      "options": [
        "3 × 10^6 m/s",
        "3 × 10^8 m/s",
        "3 × 10^10 m/s",
        "3 × 10^12 m/s"
      ],
      "explanation": "The speed of light (and all electromagnetic waves) in vacuum is approximately 3 × 10^8 meters per second.",
      "correctAnswer": [1]
    },
    {
      "question": "Which technique increases cellular network capacity by dividing large cells?",
      "options": [
        "Sectoring",
        "Cell splitting",
        "Handoff",
        "Frequency reuse"
      ],
      "explanation": "Cell splitting increases capacity by dividing large cells into smaller ones, allowing more users per area.",
      "correctAnswer": [1]
    },
    {
      "question": "What type of antenna is used in SDMA?",
      "options": [
        "Omnidirectional",
        "Directional",
        "Loop",
        "Monopole"
      ],
      "explanation": "SDMA (Space Division Multiple Access) uses directional antennas or beamforming to separate users spatially.",
      "correctAnswer": [1]
    },
    {
      "question": "Which digital modulation offers the highest spectral efficiency?",
      "options": [
        "BPSK",
        "QPSK",
        "16-QAM",
        "256-QAM"
      ],
      "explanation": "256-QAM offers the highest spectral efficiency among the options, transmitting 8 bits per symbol.",
      "correctAnswer": [3]
    },
    {
      "question": "What is the main disadvantage of higher-order QAM?",
      "options": [
        "Lower data rate",
        "Increased noise sensitivity",
        "Simpler implementation",
        "Reduced bandwidth efficiency"
      ],
      "explanation": "Higher-order QAM modulations are more sensitive to noise and interference despite offering higher data rates.",
      "correctAnswer": [1]
    },
    {
      "question": "Which network element connects to the core network in LTE?",
      "options": [
        "NodeB",
        "eNodeB",
        "gNodeB",
        "Base Station Controller"
      ],
      "explanation": "In LTE networks, the eNodeB (evolved NodeB) connects directly to the core network (EPC).",
      "correctAnswer": [1]
    },
    {
      "question": "What does EPC stand for in LTE networks?",
      "options": [
        "Enhanced Packet Core",
        "Evolved Packet Core",
        "Extended Packet Core",
        "Efficient Packet Core"
      ],
      "explanation": "EPC stands for Evolved Packet Core, the core network architecture used in LTE systems.",
      "correctAnswer": [1]
    },
    {
      "question": "Which frequency range is typically used for microwave communication?",
      "options": [
        "3 kHz - 30 kHz",
        "30 MHz - 300 MHz",
        "300 MHz - 300 GHz",
        "Above 300 GHz"
      ],
      "explanation": "Microwave frequencies typically range from 300 MHz to 300 GHz, used for satellite and point-to-point communications.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the primary benefit of using twisted pair cables?",
      "options": [
        "High bandwidth",
        "Noise reduction through twisting",
        "Light transmission",
        "Wireless capability"
      ],
      "explanation": "Twisted pair cables reduce electromagnetic interference and crosstalk through the twisting of wire pairs.",
      "correctAnswer": [1]
    },
    {
      "question": "Which modulation type is used in traditional AM radio broadcasting?",
      "options": [
        "DSB-SC",
        "DSB-FC",
        "SSB",
        "VSB"
      ],
      "explanation": "Traditional AM radio uses DSB-FC (Double Sideband Full Carrier) modulation for simple demodulation.",
      "correctAnswer": [1]
    },
    {
      "question": "What does MIMO stand for?",
      "options": [
        "Multiple Input Multiple Output",
        "Maximum Input Maximum Output",
        "Multi-Interface Multi-Operation",
        "Mobile Input Mobile Output"
      ],
      "explanation": "MIMO stands for Multiple Input Multiple Output, a technology using multiple antennas for improved performance.",
      "correctAnswer": [0]
    },
    {
      "question": "Which parameter determines the energy of electromagnetic waves?",
      "options": [
        "Amplitude only",
        "Frequency only",
        "Both amplitude and frequency",
        "Wavelength only"
      ],
      "explanation": "The energy of electromagnetic waves is directly proportional to their frequency (E = hf).",
      "correctAnswer": [1]
    },
    {
      "question": "What is the main purpose of channel coding?",
      "options": [
        "Increase data rate",
        "Reduce bandwidth",
        "Error detection and correction",
        "Signal amplification"
      ],
      "explanation": "Channel coding adds redundancy to detect and correct errors introduced during transmission.",
      "correctAnswer": [2]
    },
    {
      "question": "Which access method is used in GSM networks?",
      "options": [
        "FDMA only",
        "TDMA only",
        "CDMA only",
        "FDMA + TDMA"
      ],
      "explanation": "GSM networks use a combination of FDMA (for different carriers) and TDMA (for time slots within each carrier).",
      "correctAnswer": [3]
    },
    {
      "question": "What is beamforming in wireless communication?",
      "options": [
        "Creating multiple beams of light",
        "Directing radio signals in specific directions",
        "Splitting frequency bands",
        "Time division of signals"
      ],
      "explanation": "Beamforming is a technique that directs radio frequency signals in specific directions to improve signal quality and reduce interference.",
      "correctAnswer": [1]
    },
    {
      "question": "Which component manages session establishment in 5G?",
      "options": [
        "AMF",
        "SMF",
        "UPF",
        "NSSF"
      ],
      "explanation": "SMF (Session Management Function) handles session establishment, modification, and termination in 5G networks.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the typical frequency range for 5G millimeter wave?",
      "options": [
        "1-6 GHz",
        "6-24 GHz",
        "24-100 GHz",
        "Above 100 GHz"
      ],
      "explanation": "5G millimeter wave typically operates in the 24-100 GHz frequency range for ultra-high speed applications.",
      "correctAnswer": [2]
    },
    {
      "question": "Which duplexing method allows simultaneous transmission and reception?",
      "options": [
        "TDD (Time Division Duplex)",
        "FDD (Frequency Division Duplex)",
        "Both TDD and FDD",
        "Neither"
      ],
      "explanation": "FDD (Frequency Division Duplex) uses separate frequency bands for uplink and downlink, allowing simultaneous transmission and reception.",
      "correctAnswer": [1]
    },
    {
      "question": "What is network slicing in 5G?",
      "options": [
        "Physical division of network",
        "Virtual division of network resources",
        "Time-based resource allocation",
        "Frequency band separation"
      ],
      "explanation": "Network slicing creates virtual, dedicated networks on shared physical infrastructure to serve different service requirements.",
      "correctAnswer": [1]
    },
    {
      "question": "Which modulation is most robust against noise?",
      "options": [
        "BPSK",
        "QPSK",
        "16-QAM",
        "64-QAM"
      ],
      "explanation": "BPSK (Binary Phase Shift Keying) is most robust against noise due to maximum distance between constellation points.",
      "correctAnswer": [0]
    },
    {
      "question": "What does OFDM stand for?",
      "options": [
        "Orthogonal Frequency Division Multiplexing",
        "Optimal Frequency Distribution Method",
        "Open Frequency Data Modulation",
        "Organized Frequency Duplex Mode"
      ],
      "explanation": "OFDM stands for Orthogonal Frequency Division Multiplexing, a technique using multiple orthogonal subcarriers.",
      "correctAnswer": [0]
    },
    {
      "question": "Which technology enables massive connectivity in 5G?",
      "options": [
        "eMBB",
        "URLLC",
        "mMTC",
        "FWA"
      ],
      "explanation": "mMTC (Massive Machine-Type Communication) enables massive connectivity for IoT and M2M applications in 5G.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main advantage of digital over analog communication?",
      "options": [
        "Simpler equipment",
        "Natural signal representation",
        "Regeneration without degradation",
        "Lower bandwidth requirement"
      ],
      "explanation": "Digital signals can be regenerated at repeaters without cumulative degradation, unlike analog signals.",
      "correctAnswer": [2]
    },
    {
      "question": "Which cellular generation first introduced IP-based networks?",
      "options": [
        "2G",
        "3G",
        "4G",
        "5G"
      ],
      "explanation": "4G LTE was the first generation to use a fully IP-based network architecture (All-IP network).",
      "correctAnswer": [2]
    },
    {
      "question": "What is the purpose of cyclic prefix in OFDM?",
      "options": [
        "Increase data rate",
        "Combat inter-symbol interference",
        "Reduce power consumption",
        "Improve modulation efficiency"
      ],
      "explanation": "Cyclic prefix in OFDM helps combat inter-symbol interference and maintains orthogonality between subcarriers.",
      "correctAnswer": [1]
    },
    {
      "question": "Which component handles authentication in LTE networks?",
      "options": [
        "eNodeB",
        "MME",
        "SGW",
        "PGW"
      ],
      "explanation": "MME (Mobility Management Entity) handles authentication, authorization, and mobility management in LTE networks.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the key characteristic of visible light communication?",
      "options": [
        "Long-range transmission",
        "High power consumption",
        "Line-of-sight requirement",
        "Low data rates"
      ],
      "explanation": "Visible light communication requires line-of-sight between transmitter and receiver due to the nature of light propagation.",
      "correctAnswer": [2]
    },
    {
      "question": "Which access technique provides the best spectrum efficiency?",
      "options": [
        "FDMA",
        "TDMA",
        "CDMA",
        "OFDMA"
      ],
      "explanation": "OFDMA provides excellent spectrum efficiency by allowing flexible allocation of subcarriers to different users.",
      "correctAnswer": [3]
    },
    {
      "question": "What is carrier aggregation in LTE-Advanced?",
      "options": [
        "Combining multiple base stations",
        "Combining multiple frequency bands",
        "Combining multiple antennas",
        "Combining multiple protocols"
      ],
      "explanation": "Carrier aggregation combines multiple frequency bands to increase overall bandwidth and data rates in LTE-Advanced.",
      "correctAnswer": [1]
    },
    {
      "question": "Which parameter is most important for URLLC applications?",
      "options": [
        "High data rate",
        "Low latency",
        "Wide coverage",
        "Low cost"
      ],
      "explanation": "URLLC (Ultra-Reliable Low-Latency Communication) prioritizes very low latency for mission-critical applications.",
      "correctAnswer": [1]
    },
    {
      "question": "What does edge computing provide in 5G networks?",
      "options": [
        "Increased coverage",
        "Reduced latency",
        "Higher data rates",
        "Better security"
      ],
      "explanation": "Edge computing brings processing closer to users, significantly reducing latency for time-sensitive applications.",
      "correctAnswer": [1]
    },
    {
      "question": "Which modulation technique varies only the phase of carrier?",
      "options": [
        "AM",
        "FM",
        "PSK",
        "QAM"
      ],
      "explanation": "PSK (Phase Shift Keying) varies only the phase of the carrier wave while keeping amplitude and frequency constant.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main benefit of spatial diversity in MIMO?",
      "options": [
        "Increased power",
        "Reduced interference",
        "Improved reliability",
        "Lower cost"
      ],
      "explanation": "Spatial diversity in MIMO improves reliability by providing multiple independent signal paths.",
      "correctAnswer": [2]
    },
    {
      "question": "Which technique is used to increase data rates in the same bandwidth?",
      "options": [
        "Higher power transmission",
        "Multiple antennas",
        "Higher-order modulation",
        "Frequency hopping"
      ],
      "explanation": "Higher-order modulation schemes increase data rates by transmitting more bits per symbol in the same bandwidth.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the primary function of a repeater in communication systems?",
      "options": [
        "Filter noise",
        "Amplify and regenerate signals",
        "Compress data",
        "Convert protocols"
      ],
      "explanation": "Repeaters amplify and regenerate signals to extend transmission distance and combat signal degradation.",
      "correctAnswer": [1]
    },
    {
      "question": "Which wireless standard operates in unlicensed spectrum?",
      "options": [
        "LTE",
        "5G NR",
        "Wi-Fi",
        "GSM"
      ],
      "explanation": "Wi-Fi operates in unlicensed spectrum bands (like 2.4 GHz and 5 GHz ISM bands) that don't require licenses.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main advantage of full-duplex communication?",
      "options": [
        "Higher security",
        "Simultaneous transmission in both directions",
        "Lower power consumption",
        "Simpler implementation"
      ],
      "explanation": "Full-duplex communication allows simultaneous transmission and reception, doubling the effective data rate.",
      "correctAnswer": [1]
    },
    {
      "question": "Which component provides internet connectivity in LTE core network?",
      "options": [
        "MME",
        "SGW",
        "PGW",
        "HSS"
      ],
      "explanation": "PGW (PDN Gateway) provides connectivity to external packet data networks including the internet in LTE.",
      "correctAnswer": [2]
    },
    {
      "question": "What is adaptive modulation and coding?",
      "options": [
        "Fixed modulation scheme",
        "Changing modulation based on channel conditions",
        "Using only one type of coding",
        "Manual modulation adjustment"
      ],
      "explanation": "Adaptive modulation and coding dynamically adjusts modulation and coding schemes based on channel quality.",
      "correctAnswer": [1]
    },
    {
      "question": "Which technology allows multiple users to share the same time and frequency?",
      "options": [
        "FDMA",
        "TDMA",
        "CDMA",
        "SDMA"
      ],
      "explanation": "CDMA allows multiple users to share the same time and frequency simultaneously using unique spreading codes.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main characteristic of mm-wave communication?",
      "options": [
        "Long range",
        "High atmospheric absorption",
        "Low data rates",
        "Simple antenna design"
      ],
      "explanation": "Millimeter wave communication suffers from high atmospheric absorption, requiring short-range communication with high directivity.",
      "correctAnswer": [1]
    },
    {
      "question": "Which duplexing method is more spectrum efficient?",
      "options": [
        "FDD",
        "TDD",
        "Both equal",
        "Neither"
      ],
      "explanation": "TDD is generally more spectrum efficient as it can dynamically allocate time for uplink and downlink based on traffic asymmetry.",
      "correctAnswer": [1]
    },
    {
      "question": "What does CoMP stand for in LTE-Advanced?",
      "options": [
        "Coordinated Multi-Point",
        "Combined Multi-Protocol",
        "Centralized Multi-Processing",
        "Common Multi-Platform"
      ],
      "explanation": "CoMP stands for Coordinated Multi-Point, a technique where multiple cells coordinate to improve performance.",
      "correctAnswer": [0]
    },
    {
      "question": "Which technique helps combat fast fading in mobile channels?",
      "options": [
        "Power control",
        "Diversity techniques",
        "Error correction",
        "Frequency hopping"
      ],
      "explanation": "Diversity techniques (time, frequency, spatial) help combat fast fading by providing multiple independent signal paths.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the primary purpose of interleaving in digital communication?",
      "options": [
        "Increase data rate",
        "Reduce bandwidth",
        "Combat burst errors",
        "Improve modulation"
      ],
      "explanation": "Interleaving rearranges data to spread burst errors over time, making them easier to correct with error correction codes.",
      "correctAnswer": [2]
    },
    {
      "question": "Which 5G deployment scenario provides the highest data rates?",
      "options": [
        "Wide area coverage",
        "Dense urban",
        "Hot spot",
        "Rural coverage"
      ],
      "explanation": "Hot spot deployment scenarios use high-frequency bands and dense networks to provide the highest data rates in 5G.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main function of RRC in LTE?",
      "options": [
        "Data transmission",
        "Radio resource control",
        "Authentication",
        "Billing"
      ],
      "explanation": "RRC (Radio Resource Control) manages radio resources, connection establishment, and mobility in LTE networks.",
      "correctAnswer": [1]
    },
    {
      "question": "Which antenna configuration provides the highest gain?",
      "options": [
        "Omnidirectional",
        "Directional",
        "Isotropic",
        "Loop"
      ],
      "explanation": "Directional antennas provide the highest gain by concentrating energy in specific directions rather than radiating uniformly.",
      "correctAnswer": [1]
    },
    {
      "question": "What is massive MIMO?",
      "options": [
        "2x2 antenna configuration",
        "4x4 antenna configuration",
        "Large number of antenna elements",
        "Single antenna system"
      ],
      "explanation": "Massive MIMO uses a large number of antenna elements (typically 64 or more) to improve spectral efficiency and energy efficiency.",
      "correctAnswer": [2]
    },
    {
      "question": "Which protocol is used for 5G radio interface?",
      "options": [
        "LTE",
        "NR (New Radio)",
        "UMTS",
        "GSM"
      ],
      "explanation": "5G NR (New Radio) is the radio access technology and air interface standard for 5G networks.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the main advantage of small cells in cellular networks?",
      "options": [
        "Wider coverage",
        "Higher capacity",
        "Lower cost",
        "Simpler deployment"
      ],
      "explanation": "Small cells increase network capacity by providing additional coverage in high-traffic areas and enabling frequency reuse.",
      "correctAnswer": [1]
    },
    {
      "question": "Which technique is used to combat multipath fading in OFDM?",
      "options": [
        "Power control",
        "Cyclic prefix",
        "Frequency hopping",
        "Time interleaving"
      ],
      "explanation": "Cyclic prefix in OFDM helps combat multipath fading and inter-symbol interference by providing a guard time.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the key benefit of software-defined networking (SDN) in 5G?",
      "options": [
        "Hardware acceleration",
        "Network flexibility and programmability",
        "Reduced latency",
        "Higher bandwidth"
      ],
      "explanation": "SDN provides network flexibility and programmability by separating control plane from data plane, enabling dynamic network management.",
      "correctAnswer": [1]
    },
    {
      "question": "Which modulation is commonly used in satellite communication?",
      "options": [
        "AM",
        "FM",
        "PSK",
        "ASK"
      ],
      "explanation": "PSK modulation is commonly used in satellite communication due to its robustness against noise and interference.",
      "correctAnswer": [2]
    },
    {
      "question": "What is link budget in wireless communication?",
      "options": [
        "Financial cost calculation",
        "Power balance calculation",
        "Bandwidth allocation",
        "Time scheduling"
      ],
      "explanation": "Link budget is a power balance calculation that accounts for all gains and losses in a communication link to ensure adequate signal reception.",
      "correctAnswer": [1]
    },
    {
      "question": "Which technique allows dynamic spectrum sharing in 5G?",
      "options": [
        "Fixed spectrum allocation",
        "Cognitive radio",
        "Static frequency planning",
        "Manual spectrum management"
      ],
      "explanation": "Cognitive radio and dynamic spectrum access techniques allow flexible and efficient spectrum sharing in 5G networks.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the main purpose of pilot signals in OFDM?",
      "options": [
        "Data transmission",
        "Channel estimation",
        "Error correction",
        "Power control"
      ],
      "explanation": "Pilot signals are known reference signals used for channel estimation, synchronization, and equalization in OFDM systems.",
      "correctAnswer": [1]
    },
    {
      "question": "Which access method provides better interference management?",
      "options": [
        "FDMA",
        "TDMA",
        "CDMA with interference cancellation",
        "Random access"
      ],
      "explanation": "CDMA with interference cancellation techniques can provide better interference management through signal processing.",
      "correctAnswer": [2]
    },
    {
      "question": "What is network function virtualization (NFV) in 5G?",
      "options": [
        "Hardware optimization",
        "Running network functions on standard hardware",
        "Physical network expansion",
        "Frequency virtualization"
      ],
      "explanation": "NFV allows network functions to run as software on standard hardware instead of dedicated hardware appliances.",
      "correctAnswer": [1]
    },
    {
      "question": "Which parameter determines the coverage area of a cell?",
      "options": [
        "Antenna gain only",
        "Transmit power only",
        "Path loss and sensitivity",
        "Frequency only"
      ],
      "explanation": "Cell coverage is determined by path loss characteristics and receiver sensitivity, which depend on various factors including frequency, power, and environment.",
      "correctAnswer": [2]
    },
    {
      "question": "What is the main benefit of beamforming in 5G?",
      "options": [
        "Omnidirectional coverage",
        "Focused signal transmission",
        "Reduced antenna size",
        "Lower frequency operation"
      ],
      "explanation": "Beamforming focuses signal transmission in specific directions, improving signal quality and reducing interference.",
      "correctAnswer": [1]
    },
    {
      "question": "Which duplex mode is preferred for 5G NR?",
      "options": [
        "FDD only",
        "TDD only",
        "Both FDD and TDD",
        "Neither"
      ],
      "explanation": "5G NR supports both FDD and TDD modes, but TDD is often preferred for its flexibility in handling asymmetric traffic.",
      "correctAnswer": [2]
    },
    {
      "question": "What enables ultra-high data rates in 5G?",
      "options": [
        "Lower frequencies only",
        "Wider bandwidth and advanced techniques",
        "Simpler modulation",
        "Reduced antenna complexity"
      ],
      "explanation": "5G achieves ultra-high data rates through wider bandwidth, advanced modulation, massive MIMO, and higher frequency bands.",
      "correctAnswer": [1]
    },
    {
"question": "Which category of transmission media uses a physical path like cables or wires?",
"options": [
"Guided media",
"Unguided media",
"Satellite media",
"Quantum media"
],
"explanation": "Guided (wired/bounded) media transmit signals through a physical path such as cables or wires. ",
"correctAnswer": [0]
},
{
"question": "Unshielded Twisted Pair (UTP) cables are typically used for:",
"options": [
"Long-haul submarine links",
"LANs with up to ~100 m runs",
"Deep-space communication",
"High-power RF transmission"
],
"explanation": "UTP is cheaper, commonly used in LANs, and typically supports 1–10 Gbps up to about 100 meters. ",
"correctAnswer": [1]
},
{
"question": "Shielded Twisted Pair (STP) differs from UTP primarily because STP:",
"options": [
"Uses fiber instead of copper",
"Has additional shielding to reduce noise",
"Cannot support Gigabit speeds",
"Is wireless"
],
"explanation": "STP includes an additional shield that reduces noise and can improve data security/speed relative to UTP. ",
"correctAnswer": [1]
},
{
"question": "Which transmission medium provides better shielding and higher bandwidth than twisted pair?",
"options": [
"Coaxial cable",
"Infrared link",
"Microwave link",
"UTP cable"
],
"explanation": "Coaxial cable has a central conductor, insulation, and metal shielding, offering better shielding and higher bandwidth than twisted pair. ",
"correctAnswer": [0]
},
{
"question": "Which is the fastest data-transferring wired medium and is immune to electromagnetic interference?",
"options": [
"UTP",
"STP",
"Coaxial cable",
"Optical fiber"
],
"explanation": "Optical fiber uses light, supports very high bandwidth, long distances, and is immune to electromagnetic interference. ",
"correctAnswer": [3]
},
{
"question": "Single Mode Fiber (SMF) is primarily used for:",
"options": [
"Short-distance links only",
"Long-distance transmission",
"Analog TV distribution only",
"Wireless backhaul only"
],
"explanation": "SMF is designed for long-distance transmission, while MMF is used for shorter distances. ",
"correctAnswer": [1]
},
{
"question": "Which category of transmission media uses electromagnetic waves without a physical conductor?",
"options": [
"Wired media",
"Guided media",
"Unguided (wireless) media",
"Shielded media"
],
"explanation": "Unguided media transmit data through free space using electromagnetic waves and are also called unbounded media. ",
"correctAnswer": [2]
},
{
"question": "Microwave links typically require which condition for reliable communication?",
"options": [
"Underwater conduits",
"Line-of-sight alignment between endpoints",
"High humidity environments",
"Noisy urban corridors"
],
"explanation": "Microwave communication generally requires line-of-sight between transmitter and receiver, often with directional antennas. ",
"correctAnswer": [1]
},
{
"question": "Infrared communication is best characterized by:",
"options": [
"Long-range and penetrates walls",
"Short-range and blocked by obstacles",
"Global coverage via satellites",
"Undersea cable replacement"
],
"explanation": "Infrared is short-range and cannot pass through walls; obstacles hinder the signal (e.g., TV remote). ",
"correctAnswer": [1]
},
{
"question": "Radio waves are described as:",
"options": [
"Highly directional only",
"Omni-directional and easy to generate/use",
"Confined to optical fibers",
"Ineffective for mobile phones"
],
"explanation": "Radio waves are electromagnetic waves that can travel in all directions and are easy to generate; used in FM radio, TV, and mobiles. ",
"correctAnswer": [1]
},
{
"question": "Which wireless technology provides global coverage using orbiting platforms?",
"options": [
"Infrared",
"Bluetooth",
"Satellite communication",
"Wi-Fi only"
],
"explanation": "Satellite communication uses satellites to cover very large areas (global), supporting GPS, weather, and international broadcasting. ",
"correctAnswer": [2]
},
{
"question": "In the electromagnetic spectrum, as frequency increases, wavelength:",
"options": [
"Increases",
"Decreases",
"Stays constant",
"Becomes negative"
],
"explanation": "Frequency and wavelength are inversely related: moving left to right, frequency increases and wavelength decreases. ",
"correctAnswer": [1]
},
{
"question": "Digital electronics primarily deals with signals that:",
"options": [
"Continuously vary over time",
"Have two discrete states 0 and 1",
"Are only analog",
"Are only optical"
],
"explanation": "Digital electronics uses digital signals with two states: 0 (Low/OFF) and 1 (High/ON). ",
"correctAnswer": [1]
},
{
"question": "Which is NOT an advantage of digital electronics over analog according to the notes?",
"options": [
"High noise immunity",
"Easy storage and processing",
"More reliable and flexible",
"Requires large antennas"
],
"explanation": "Advantages include noise immunity, easy storage/processing, reliability, encryption; large antennas relate to low-frequency baseband, not a digital advantage. ",
"correctAnswer": [3]
},
{
"question": "Which gates are universal and can implement any logic circuit?",
"options": [
"AND and OR",
"XOR and XNOR",
"NAND and NOR",
"NOT and XOR"
],
"explanation": "NAND and NOR are universal gates; any logic circuit can be constructed using only one of them. ",
"correctAnswer": [2]
},
{
"question": "Combinational circuits' outputs depend on:",
"options": [
"Present inputs only",
"Past inputs only",
"Clock history only",
"Noise levels only"
],
"explanation": "Combinational circuits produce outputs based solely on current inputs; sequential circuits depend on inputs plus past state. ",
"correctAnswer": [0]
},
{
"question": "Which is a basic memory element used in sequential circuits?",
"options": [
"Multiplexer",
"Decoder",
"Flip-flop",
"Adder"
],
"explanation": "Flip-flops (SR, JK, D, T) are the fundamental memory elements in sequential circuits; registers are groups of flip-flops. ",
"correctAnswer": [2]
},
{
"question": "Which number system uses digits 0–9 and A–F?",
"options": [
"Octal",
"Binary",
"Decimal",
"Hexadecimal"
],
"explanation": "Hexadecimal (base 16) uses digits 0–9 and letters A–F to represent values 10–15. ",
"correctAnswer": [3]
},
{
"question": "Frequency (in Hz) is defined as:",
"options": [
"Cycles per minute",
"Cycles per second",
"Voltage per ampere",
"Distance per time"
],
"explanation": "Frequency is the number of signal cycles per second, measured in Hertz (Hz); f = 1/T. ",
"correctAnswer": [1]
},
{
"question": "Bandwidth (BW) of a channel is computed as:",
"options": [
"BW = f_low − f_high",
"BW = f_high − f_low",
"BW = f_high × f_low",
"BW = f_high / f_low"
],
"explanation": "Bandwidth equals the difference between the highest and lowest frequencies passed by the channel: BW = f_high − f_low. ",
"correctAnswer": [1]
},
{
"question": "Common power supply frequency in India is:",
"options": [
"60 Hz",
"50 Hz",
"100 Hz",
"25 Hz"
],
"explanation": "The notes state 50 Hz for India and 60 Hz for the USA. ",
"correctAnswer": [1]
},
{
"question": "One main reason for using modulation instead of baseband transmission is:",
"options": [
"To increase antenna size",
"To reduce required antenna size",
"To make signals purely analog",
"To eliminate carriers entirely"
],
"explanation": "Modulation reduces required antenna size (λ/4 rule), enables long-distance transmission, multiplexing, and noise reduction. ",
"correctAnswer": [1]
},
{
"question": "In Amplitude Modulation (AM), which parameter varies with the message signal?",
"options": [
"Carrier frequency",
"Carrier phase",
"Carrier amplitude",
"Sampling rate"
],
"explanation": "AM varies the carrier's amplitude according to the message, keeping frequency and phase constant; AM bandwidth ≈ 2f_m. ",
"correctAnswer": [2]
},
{
"question": "Carson's Rule for FM bandwidth is approximately:",
"options": [
"BW ≈ 2(Δf + f_m)",
"BW ≈ Δf / f_m",
"BW ≈ 2πΔf",
"BW ≈ f_c − f_m"
],
"explanation": "For Frequency Modulation, Carson's Rule gives approximate bandwidth: BW ≈ 2(Δf + f_m). ",
"correctAnswer": [0]
},
{
"question": "Phase Modulation (PM) is most similar to:",
"options": [
"ASK",
"FSK",
"FM (both are angular modulation)",
"PAM"
],
"explanation": "PM and FM are both forms of angular modulation; PM varies phase with the message signal. ",
"correctAnswer": [2]
},
{
"question": "A typical AM broadcast band given in the notes is:",
"options": [
"88–108 MHz",
"535–1605 kHz",
"2.4–2.5 GHz",
"300 GHz–400 THz"
],
"explanation": "AM radio band is cited as 535 kHz to 1605 kHz; FM radio is 88–108 MHz. ",
"correctAnswer": [1]
},
{
"question": "Which digital modulation changes the carrier's amplitude with binary data?",
"options": [
"ASK",
"FSK",
"PSK",
"QAM only"
],
"explanation": "Amplitude Shift Keying (ASK) maps bit values to different carrier amplitudes (e.g., 1 = high amplitude, 0 = low). ",
"correctAnswer": [0]
},
{
"question": "In Frequency Shift Keying (FSK), bit '1' and '0' are represented by:",
"options": [
"Two different phases",
"Two different frequencies",
"Two different amplitudes",
"Two different time slots"
],
"explanation": "FSK uses two distinct frequencies (f1, f0) to represent binary 1 and 0. ",
"correctAnswer": [1]
},
{
"question": "Which modulation varies the phase of the carrier according to data bits?",
"options": [
"PSK",
"ASK",
"FSK",
"PWM"
],
"explanation": "Phase Shift Keying (PSK) alters the carrier's phase based on the digital input; variants include BPSK and QPSK. ",
"correctAnswer": [0]
},
{
"question": "QAM combines which two modulation dimensions to increase data rate?",
"options": [
"Frequency and time",
"Space and code",
"Amplitude and phase",
"Time and code"
],
"explanation": "Quadrature Amplitude Modulation varies both amplitude and phase using I/Q components to convey multiple bits per symbol. ",
"correctAnswer": [2]
},
{
"question": "How many bits per symbol does 16-QAM carry (as described)?",
"options": [
"2 bits",
"3 bits",
"4 bits",
"6 bits"
],
"explanation": "16-QAM has 16 constellation points, representing 4 bits per symbol; 64-QAM uses 6 bits per symbol. ",
"correctAnswer": [2]
},
{
"question": "A key trade-off of higher-order QAM (e.g., 256-QAM) is that it:",
"options": [
"Requires lower SNR",
"Is more noise-sensitive and needs better SNR",
"Uses less complex receivers",
"Cannot be used in Wi-Fi or LTE"
],
"explanation": "Higher-order QAM packs more bits per symbol but is more sensitive to noise and demands higher SNR and more complex receivers. ",
"correctAnswer": [1]
},
{
"question": "Pulse Amplitude Modulation (PAM) varies which attribute of the pulse?",
"options": [
"Width",
"Position",
"Amplitude",
"Phase"
],
"explanation": "In PAM, the amplitude (height) of regularly spaced pulses is varied with the message signal; used as a step in PCM. ",
"correctAnswer": [2]
},
{
"question": "Pulse Width Modulation (PWM) changes a pulse's:",
"options": [
"Amplitude only",
"Width (duration)",
"Center frequency",
"Phase angle"
],
"explanation": "PWM varies the pulse width in proportion to the modulating signal while amplitude remains constant. ",
"correctAnswer": [1]
},
{
"question": "Pulse Position Modulation (PPM) encodes information in:",
"options": [
"Pulse amplitude",
"Pulse width",
"Pulse time position",
"Pulse frequency"
],
"explanation": "PPM shifts the time position of each pulse according to the message, with amplitude and width held constant. ",
"correctAnswer": [2]
},
{
"question": "Which pulse technique is DIGITAL and involves sampling, quantization, and encoding?",
"options": [
"PAM",
"PWM",
"PPM",
"PCM"
],
"explanation": "Pulse Code Modulation (PCM) is a digital method with steps: sampling, quantization, and encoding; used in telephony and audio. ",
"correctAnswer": [3]
},
{
"question": "Which is a reason listed for the need for modulation?",
"options": [
"To avoid multiplexing",
"To increase noise susceptibility",
"To support long-distance transmission",
"To remove carriers from signals"
],
"explanation": "Motivations include smaller antennas, long-distance transmission, multiplexing, noise reduction, and better signal quality. ",
"correctAnswer": [2]
},
{
"question": "Which multiple access technique assigns separate frequency bands to each user?",
"options": [
"FDMA",
"TDMA",
"CDMA",
"SDMA"
],
"explanation": "FDMA allocates distinct frequency bands to users; simple but can waste bandwidth if a user is idle. ",
"correctAnswer": [0]
},
{
"question": "Time Division Multiple Access (TDMA) works by:",
"options": [
"Giving each user a unique code simultaneously",
"Allowing users to transmit in different time slots on the same frequency",
"Providing separate spatial beams per user",
"Assigning multiple orthogonal subcarriers per user"
],
"explanation": "TDMA shares the same frequency channel among users by dividing transmission into distinct time slots; requires precise timing. ",
"correctAnswer": [1]
},
{
"question": "CDMA separates users primarily by:",
"options": [
"Time slots",
"Unique spreading codes",
"Geographic cells only",
"Antenna polarization"
],
"explanation": "CDMA lets all users share the same time and frequency but separates them via unique codes; it is relatively interference-resistant. ",
"correctAnswer": [1]
},
{
"question": "OFDMA improves spectral efficiency using:",
"options": [
"Single wideband carrier only",
"Orthogonal subcarriers allocated to users",
"Only time slotting",
"Only space division"
],
"explanation": "OFDMA assigns multiple orthogonal subcarriers to users, offering high efficiency and lower interference; used in LTE/ Wi-Fi 6/5G. ",
"correctAnswer": [1]
},
{
"question": "SDMA (Space Division Multiple Access) leverages:",
"options": [
"Unique codes only",
"Different time slots",
"Multiple antennas and beamforming",
"Separate optical fibers"
],
"explanation": "SDMA uses spatial separation via multiple antennas (MIMO) and beamforming to serve users simultaneously. ",
"correctAnswer": [2]
},
{
"question": "In a cellular system, the Mobile Station (MS) consists of:",
"options": [
"Only the battery pack",
"Base Transceiver Station and antennas",
"Mobile Equipment and SIM card",
"Only the Mobile Switching Center"
],
"explanation": "MS includes the Mobile Equipment (hardware) and the SIM, which holds identity/authentication data (IMSI, services). ",
"correctAnswer": [2]
},
{
"question": "Which component controls multiple BTSs and manages handovers and channel allocation?",
"options": [
"HLR",
"BSC (Base Station Controller)",
"VLR",
"MSC (Mobile Switching Center)"
],
"explanation": "Within the base station subsystem, the BSC controls multiple BTSs, handling functions like handover and channel allocation. ",
"correctAnswer": [1]
},
{
"question": "Frequency reuse in cellular networks aims to:",
"options": [
"Eliminate co-channel interference completely",
"Reuse the same channels in sufficiently separated cells for capacity",
"Use each frequency only once in the network",
"Avoid hexagonal cell planning"
],
"explanation": "Frequency reuse assigns the same set of channels to cells spaced far enough apart to limit interference, improving capacity with limited spectrum. ",
"correctAnswer": [1]
},
{
"question": "In GSM-style hard handover, the connection behavior is best described as:",
"options": [
"Make-before-break",
"Break-before-make",
"Simultaneous dual connection indefinitely",
"No change in serving base station"
],
"explanation": "Hard handover is 'break before make' (old connection is released before the new one is established). Soft handover is the reverse and used in CDMA. ",
"correctAnswer": [1]
},
{
"question": "Which of the following is a combinational circuit example from the notes?",
"options": [
"Register",
"Counter",
"Multiplexer (MUX)",
"Flip-flop"
],
"explanation": "Multiplexers, adders, encoders/decoders are combinational; registers and counters are sequential (memory involved). ",
"correctAnswer": [2]
},
{
"question": "Which statement about AM and FM in the notes is correct?",
"options": [
"AM varies frequency; FM varies amplitude",
"AM and FM both vary phase",
"AM varies amplitude; FM varies frequency",
"Neither use a carrier"
],
"explanation": "AM changes carrier amplitude; FM changes carrier frequency. Phases remain constant in these simplified descriptions. ",
"correctAnswer": [2]
},
{
"question": "According to the notes, FM is favored for audio because it offers:",
"options": [
"Lowest bandwidth at any quality",
"High noise immunity and better sound quality",
"No need for carrier synchronization ever",
"Compatibility only with analog receivers"
],
"explanation": "FM provides higher noise immunity and better sound quality relative to AM; bandwidth estimated via Carson's Rule. ",
"correctAnswer": [1]
},
{
"question": "Which wireless band from the notes corresponds to typical FM radio broadcasts?",
"options": [
"88–108 MHz",
"535–1605 kHz",
"1–10 GHz",
"300 GHz–400 THz"
],
"explanation": "FM radio band is 88–108 MHz; AM is 535–1605 kHz. ",
"correctAnswer": [0]
},
{
"question": "Which statement best matches PCM's application area?",
"options": [
"Only motor control and power regulation",
"Digital telephony and computer audio/video",
"Only short-range remote controls",
"Analog cable TV transmission"
],
"explanation": "PCM is used in digital telephony and digital audio/video formats (e.g., CDs/MP3 workflows). ",
"correctAnswer": [1]
}
],
    passage_based_questions: {
     "passage_1": {
      "title": "Communication System Fundamentals",
      "passage": "A communication system is designed to transfer information from a source to a destination. The basic components include a transmitter that converts the information signal into a form suitable for transmission, a communication channel that carries the signal from transmitter to receiver, and a receiver that reconstructs the original information signal. The channel can be either wired (using physical cables like twisted pair, coaxial, or optical fiber) or wireless (using electromagnetic waves). The choice between wired and wireless depends on factors such as mobility requirements, installation costs, bandwidth needs, and security considerations.",
      "questions": [
        {
          "question": "What is the primary function of a transmitter in a communication system?",
          "options": [
            "To convert information signal into transmittable form",
            "To amplify the received signal",
            "To filter unwanted noise",
            "To demodulate the carrier wave"
          ],
          "explanation": "The transmitter's main role is to convert the information signal into a form suitable for transmission over the communication channel.",
          "correctAnswer": [0]
        },
        {
          "question": "Which of the following is NOT a basic component of a communication system?",
          "options": [
            "Transmitter",
            "Amplifier",
            "Channel",
            "Receiver"
          ],
          "explanation": "While amplifiers may be present in communication systems, they are not considered one of the three basic fundamental components: transmitter, channel, and receiver.",
          "correctAnswer": [1]
        },
        {
          "question": "What type of communication channel uses electromagnetic waves?",
          "options": [
            "Wired channel",
            "Wireless channel",
            "Optical fiber",
            "Coaxial cable"
          ],
          "explanation": "Wireless channels utilize electromagnetic waves to transmit information without physical connections.",
          "correctAnswer": [1]
        },
        {
          "question": "Which factor is most important when choosing between wired and wireless communication?",
          "options": [
            "Color of the equipment",
            "Mobility requirements",
            "Brand of manufacturer",
            "Time of day"
          ],
          "explanation": "Mobility requirements are a crucial factor in determining whether to use wired or wireless communication systems.",
          "correctAnswer": [1]
        },
        {
          "question": "What does the communication channel do in a communication system?",
          "options": [
            "Generates the information signal",
            "Carries signal from transmitter to receiver",
            "Converts analog to digital signals",
            "Provides power to the system"
          ],
          "explanation": "The communication channel serves as the medium that carries the signal from the transmitter to the receiver.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_2": {
      "title": "Electromagnetic Spectrum and Wave Properties",
      "passage": "The electromagnetic spectrum encompasses all electromagnetic radiation, from extremely low-frequency radio waves to high-energy gamma rays. Electromagnetic waves are characterized by their frequency, wavelength, and energy content. They travel at the speed of light (3×10^8 m/s) in vacuum and do not require a physical medium for propagation. Different regions of the spectrum are utilized for various communication applications: radio waves for broadcasting and mobile communications, microwaves for satellite communications and radar, infrared for remote controls and fiber optics, visible light for optical communications, and higher frequency regions for specialized applications.",
      "questions": [
        {
          "question": "What is the speed of electromagnetic waves in vacuum?",
          "options": [
            "3×10^6 m/s",
            "3×10^8 m/s",
            "3×10^10 m/s",
            "3×10^12 m/s"
          ],
          "explanation": "Electromagnetic waves travel at the speed of light, which is approximately 3×10^8 meters per second in vacuum.",
          "correctAnswer": [1]
        },
        {
          "question": "Which electromagnetic waves have the highest energy?",
          "options": [
            "Radio waves",
            "Microwaves",
            "X-rays",
            "Gamma rays"
          ],
          "explanation": "Gamma rays have the highest frequency and therefore the highest energy in the electromagnetic spectrum.",
          "correctAnswer": [3]
        },
        {
          "question": "Do electromagnetic waves require a medium for propagation?",
          "options": [
            "Yes, they need air",
            "Yes, they need water",
            "No, they can travel through vacuum",
            "Only for long distances"
          ],
          "explanation": "Electromagnetic waves do not require a physical medium and can propagate through vacuum, unlike mechanical waves.",
          "correctAnswer": [2]
        },
        {
          "question": "Which part of the electromagnetic spectrum is used for satellite communications?",
          "options": [
            "Radio waves",
            "Microwaves",
            "Infrared",
            "Visible light"
          ],
          "explanation": "Microwaves are commonly used for satellite communications due to their ability to penetrate the atmosphere effectively.",
          "correctAnswer": [1]
        },
        {
          "question": "What characterizes electromagnetic waves?",
          "options": [
            "Only frequency",
            "Only wavelength",
            "Frequency, wavelength, and energy",
            "Only energy content"
          ],
          "explanation": "Electromagnetic waves are characterized by their frequency, wavelength, and energy content, which are all interrelated.",
          "correctAnswer": [2]
        }
      ]
    },
    "passage_3": {
      "title": "Amplitude Modulation and Frequency Modulation",
      "passage": "Modulation is the process of varying one or more properties of a high-frequency carrier wave in accordance with a lower-frequency information signal. In Amplitude Modulation (AM), the amplitude of the carrier wave is varied while keeping the frequency constant. AM is simple to implement and provides good long-range propagation, but it is susceptible to noise and interference. Frequency Modulation (FM) varies the frequency of the carrier wave while keeping the amplitude constant. FM provides better sound quality and noise immunity compared to AM, but requires more complex circuitry and has limited range. AM is still used for long-distance broadcasting and aviation communications, while FM is preferred for high-fidelity audio broadcasting and two-way radio communications.",
      "questions": [
        {
          "question": "In Amplitude Modulation, which property of the carrier wave is varied?",
          "options": [
            "Frequency",
            "Phase",
            "Amplitude",
            "Wavelength"
          ],
          "explanation": "In AM, the amplitude of the carrier wave is varied according to the information signal while frequency remains constant.",
          "correctAnswer": [2]
        },
        {
          "question": "Why is FM less susceptible to noise compared to AM?",
          "options": [
            "FM uses higher power",
            "Noise typically affects amplitude, not frequency",
            "FM uses digital signals",
            "FM has wider bandwidth"
          ],
          "explanation": "Most noise affects the amplitude of signals, so FM, which varies frequency rather than amplitude, is less affected by noise.",
          "correctAnswer": [1]
        },
        {
          "question": "What is a key advantage of AM over FM?",
          "options": [
            "Better sound quality",
            "Noise immunity",
            "Simpler implementation and long-range coverage",
            "Wider bandwidth"
          ],
          "explanation": "AM is simpler to implement and provides better long-range propagation characteristics compared to FM.",
          "correctAnswer": [2]
        },
        {
          "question": "Which modulation technique is preferred for high-fidelity audio?",
          "options": [
            "AM",
            "FM",
            "Both are equal",
            "Neither"
          ],
          "explanation": "FM provides better sound quality and is preferred for high-fidelity audio applications due to its noise immunity.",
          "correctAnswer": [1]
        },
        {
          "question": "What remains constant in Frequency Modulation?",
          "options": [
            "Frequency",
            "Amplitude",
            "Phase",
            "Power"
          ],
          "explanation": "In FM, the amplitude of the carrier wave remains constant while the frequency is varied according to the information signal.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_4": {
      "title": "Digital Modulation Techniques",
      "passage": "Digital modulation techniques are essential for modern communication systems as they provide better noise immunity, efficient spectrum utilization, and compatibility with digital processing. Phase Shift Keying (PSK) varies the phase of the carrier wave to represent digital bits. Binary PSK (BPSK) uses two phase states to represent 0 and 1, while Quadrature PSK (QPSK) uses four phase states to transmit two bits per symbol. Quadrature Amplitude Modulation (QAM) combines both amplitude and phase variations to encode multiple bits per symbol. Higher-order modulations like 64-QAM and 256-QAM achieve greater spectral efficiency but are more sensitive to noise and require more complex implementation.",
      "questions": [
        {
          "question": "How many phase states are used in BPSK?",
          "options": [
            "1",
            "2",
            "4",
            "8"
          ],
          "explanation": "Binary PSK (BPSK) uses two phase states to represent the binary digits 0 and 1.",
          "correctAnswer": [1]
        },
        {
          "question": "Which modulation technique combines both amplitude and phase variations?",
          "options": [
            "PSK",
            "ASK",
            "QAM",
            "FSK"
          ],
          "explanation": "Quadrature Amplitude Modulation (QAM) varies both the amplitude and phase of the carrier wave to encode data.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the main advantage of QPSK over BPSK?",
          "options": [
            "Lower complexity",
            "Better noise immunity",
            "Transmits twice the data rate using same bandwidth",
            "Uses less power"
          ],
          "explanation": "QPSK can transmit 2 bits per symbol compared to BPSK's 1 bit per symbol, effectively doubling the data rate in the same bandwidth.",
          "correctAnswer": [2]
        },
        {
          "question": "How many bits does each symbol represent in 64-QAM?",
          "options": [
            "4",
            "5",
            "6",
            "8"
          ],
          "explanation": "64-QAM has 64 possible symbol states, which equals 2^6, so each symbol represents 6 bits.",
          "correctAnswer": [2]
        },
        {
          "question": "What is a trade-off of using higher-order QAM modulations?",
          "options": [
            "Lower data rates",
            "Simpler implementation",
            "Greater sensitivity to noise",
            "Wider bandwidth requirement"
          ],
          "explanation": "Higher-order QAM modulations achieve higher data rates but become more sensitive to noise and interference.",
          "correctAnswer": [2]
        }
      ]
    },
    "passage_5": {
      "title": "Multiple Access Techniques in Cellular Systems",
      "passage": "Multiple access techniques allow multiple users to share communication resources efficiently. Frequency Division Multiple Access (FDMA) assigns different frequency bands to different users. Time Division Multiple Access (TDMA) allows users to share the same frequency by transmitting in different time slots. Code Division Multiple Access (CDMA) enables multiple users to transmit simultaneously on the same frequency using unique spreading codes. Orthogonal Frequency Division Multiple Access (OFDMA) combines OFDM with multiple access, allowing subcarriers to be allocated to different users. Space Division Multiple Access (SDMA) uses directional antennas or beamforming to separate users spatially. Each technique has specific advantages and is suitable for different applications and network requirements.",
      "questions": [
        {
          "question": "Which multiple access technique assigns different frequency bands to users?",
          "options": [
            "TDMA",
            "FDMA",
            "CDMA",
            "SDMA"
          ],
          "explanation": "Frequency Division Multiple Access (FDMA) separates users by assigning different frequency bands to each user.",
          "correctAnswer": [1]
        },
        {
          "question": "In TDMA, how are users separated?",
          "options": [
            "By frequency",
            "By time slots",
            "By codes",
            "By space"
          ],
          "explanation": "Time Division Multiple Access (TDMA) allows users to share the same frequency by transmitting in different time slots.",
          "correctAnswer": [1]
        },
        {
          "question": "What allows multiple users to transmit simultaneously on the same frequency in CDMA?",
          "options": [
            "Time slots",
            "Frequency bands",
            "Unique spreading codes",
            "Power levels"
          ],
          "explanation": "CDMA uses unique spreading codes for each user, allowing simultaneous transmission on the same frequency.",
          "correctAnswer": [2]
        },
        {
          "question": "Which technique uses directional antennas to separate users?",
          "options": [
            "FDMA",
            "TDMA",
            "CDMA",
            "SDMA"
          ],
          "explanation": "Space Division Multiple Access (SDMA) uses directional antennas or beamforming to separate users spatially.",
          "correctAnswer": [3]
        },
        {
          "question": "What does OFDMA combine with multiple access?",
          "options": [
            "AM modulation",
            "FM modulation",
            "OFDM",
            "PSK modulation"
          ],
          "explanation": "OFDMA combines Orthogonal Frequency Division Multiplexing (OFDM) with multiple access capabilities.",
          "correctAnswer": [2]
        }
      ]
    },
    "passage_6": {
      "title": "Cellular System Concepts and Architecture",
      "passage": "Cellular systems are designed to provide wide-area coverage while efficiently utilizing the available spectrum through frequency reuse. The service area is divided into cells, each served by a base station. Frequency reuse allows the same frequencies to be used in non-adjacent cells without causing interference. Cell splitting is used to increase capacity by dividing large cells into smaller ones. Sectoring involves dividing cells into sectors using directional antennas to increase capacity and reduce interference. Handoff mechanisms ensure seamless connectivity as mobile users move between cells. The cellular concept enables networks to serve a large number of users with limited spectrum resources while maintaining acceptable service quality.",
      "questions": [
        {
          "question": "What is the main purpose of the cellular system concept?",
          "options": [
            "To increase transmission power",
            "To provide wide coverage with efficient spectrum use",
            "To reduce the number of base stations",
            "To eliminate the need for handoffs"
          ],
          "explanation": "The cellular concept aims to provide wide-area coverage while efficiently utilizing the available radio spectrum through frequency reuse.",
          "correctAnswer": [1]
        },
        {
          "question": "What is frequency reuse in cellular systems?",
          "options": [
            "Using the same frequency in all cells",
            "Using different frequencies in each cell",
            "Using the same frequencies in non-adjacent cells",
            "Never reusing frequencies"
          ],
          "explanation": "Frequency reuse allows the same frequencies to be used in non-adjacent cells without causing harmful interference.",
          "correctAnswer": [2]
        },
        {
          "question": "What is the purpose of cell splitting?",
          "options": [
            "To reduce coverage area",
            "To increase capacity",
            "To eliminate interference",
            "To reduce power consumption"
          ],
          "explanation": "Cell splitting divides large cells into smaller ones to increase the capacity of the cellular network.",
          "correctAnswer": [1]
        },
        {
          "question": "How does sectoring help in cellular systems?",
          "options": [
            "By increasing cell size",
            "By using omnidirectional antennas",
            "By dividing cells into sectors with directional antennas",
            "By eliminating base stations"
          ],
          "explanation": "Sectoring divides cells into sectors using directional antennas to increase capacity and reduce interference.",
          "correctAnswer": [2]
        },
        {
          "question": "What ensures seamless connectivity as users move between cells?",
          "options": [
            "Frequency reuse",
            "Cell splitting",
            "Sectoring",
            "Handoff mechanisms"
          ],
          "explanation": "Handoff mechanisms ensure continuous service as mobile users move from one cell to another.",
          "correctAnswer": [3]
        }
      ]
    },
    "passage_7": {
      "title": "Signal Types and Properties",
      "passage": "Communication systems handle different types of signals, each with distinct characteristics and applications. Analog signals are continuous in both time and amplitude, representing information through smooth variations. They are susceptible to noise and degradation during transmission and processing. Digital signals are discrete in nature, representing information using distinct levels or states (typically binary). Digital signals offer better noise immunity, easier processing, and more efficient storage compared to analog signals. Optical signals use light as the carrier medium, typically in fiber optic communications. They provide very high bandwidth, low loss over long distances, and immunity to electromagnetic interference. The choice of signal type depends on the application requirements, including bandwidth needs, noise environment, and system complexity.",
      "questions": [
        {
          "question": "What characterizes analog signals?",
          "options": [
            "Discrete time and amplitude",
            "Continuous time and amplitude",
            "Digital representation",
            "Binary states only"
          ],
          "explanation": "Analog signals are continuous in both time and amplitude, representing information through smooth variations.",
          "correctAnswer": [1]
        },
        {
          "question": "What is a major advantage of digital signals over analog signals?",
          "options": [
            "Larger size",
            "Higher power consumption",
            "Better noise immunity",
            "More complex processing"
          ],
          "explanation": "Digital signals offer better noise immunity compared to analog signals, making them more reliable for communication.",
          "correctAnswer": [2]
        },
        {
          "question": "What medium do optical signals use as a carrier?",
          "options": [
            "Radio waves",
            "Sound waves",
            "Light",
            "Microwaves"
          ],
          "explanation": "Optical signals use light as the carrier medium, typically employed in fiber optic communications.",
          "correctAnswer": [2]
        },
        {
          "question": "What is a key advantage of optical signals?",
          "options": [
            "Low bandwidth",
            "High loss over long distances",
            "Immunity to electromagnetic interference",
            "Simple equipment"
          ],
          "explanation": "Optical signals provide immunity to electromagnetic interference, along with high bandwidth and low loss characteristics.",
          "correctAnswer": [2]
        },
        {
          "question": "How do digital signals typically represent information?",
          "options": [
            "Through continuous variations",
            "Using distinct levels or states",
            "With analog waveforms",
            "Through frequency changes only"
          ],
          "explanation": "Digital signals represent information using distinct, discrete levels or states, typically in binary form.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_8": {
      "title": "Wired vs Wireless Communication Comparison",
      "passage": "The choice between wired and wireless communication depends on various factors and trade-offs. Wired communication offers high reliability, better security, higher bandwidth capabilities, and consistent performance. However, it requires physical infrastructure installation, has limited mobility, and involves higher installation costs. Wireless communication provides excellent mobility, flexible deployment, easier installation in difficult terrains, and supports a wide range of mobile devices. The disadvantages include susceptibility to interference, generally lower bandwidth compared to wired systems, security vulnerabilities, and variable performance depending on environmental conditions. Modern communication networks often employ hybrid approaches, combining wired backbone networks with wireless access points to leverage the advantages of both technologies.",
      "questions": [
        {
          "question": "What is a key advantage of wired communication?",
          "options": [
            "Easy mobility",
            "High reliability and security",
            "No installation required",
            "Works without power"
          ],
          "explanation": "Wired communication systems typically offer high reliability and better security compared to wireless systems.",
          "correctAnswer": [1]
        },
        {
          "question": "What is the main advantage of wireless communication?",
          "options": [
            "Higher bandwidth",
            "Better security",
            "Mobility and flexibility",
            "Lower cost"
          ],
          "explanation": "The primary advantage of wireless communication is the mobility and flexibility it provides to users.",
          "correctAnswer": [2]
        },
        {
          "question": "What is a typical disadvantage of wireless systems?",
          "options": [
            "High installation costs",
            "Limited mobility",
            "Susceptibility to interference",
            "Requires physical cables"
          ],
          "explanation": "Wireless systems are generally more susceptible to interference from various sources compared to wired systems.",
          "correctAnswer": [2]
        },
        {
          "question": "How do modern networks often address the limitations of both wired and wireless?",
          "options": [
            "Use only wired connections",
            "Use only wireless connections",
            "Employ hybrid approaches combining both",
            "Avoid using either technology"
          ],
          "explanation": "Modern networks often use hybrid approaches that combine wired backbone infrastructure with wireless access to get benefits of both.",
          "correctAnswer": [2]
        },
        {
          "question": "Which factor affects wireless performance but not wired performance?",
          "options": [
            "Data rate",
            "Environmental conditions",
            "Power consumption",
            "Equipment cost"
          ],
          "explanation": "Environmental conditions such as weather, obstacles, and interference significantly affect wireless performance but have minimal impact on wired systems.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_9": {
      "title": "5G Technology and Applications",
      "passage": "5G represents the fifth generation of cellular network technology, designed to support three main use cases: Enhanced Mobile Broadband (eMBB), Ultra-Reliable Low-Latency Communication (URLLC), and Massive Machine-Type Communication (mMTC). eMBB focuses on providing extremely high data rates and improved user experience for applications like 4K/8K video streaming and virtual reality. URLLC enables applications requiring very low latency and high reliability, such as autonomous vehicles and industrial automation. mMTC supports massive numbers of connected devices with extended battery life for IoT applications. 5G networks utilize advanced technologies including massive MIMO, beamforming, network slicing, and edge computing to achieve these diverse requirements simultaneously.",
      "questions": [
        {
          "question": "What does eMBB stand for in 5G technology?",
          "options": [
            "Enhanced Mobile Broadcasting",
            "Enhanced Mobile Broadband",
            "Extended Mobile Broadband",
            "Efficient Mobile Broadcasting"
          ],
          "explanation": "eMBB stands for Enhanced Mobile Broadband, one of the three main 5G use cases focused on high data rates.",
          "correctAnswer": [1]
        },
        {
          "question": "Which 5G use case is most suitable for autonomous vehicles?",
          "options": [
            "eMBB",
            "URLLC",
            "mMTC",
            "None of the above"
          ],
          "explanation": "URLLC (Ultra-Reliable Low-Latency Communication) is designed for applications requiring very low latency and high reliability like autonomous vehicles.",
          "correctAnswer": [1]
        },
        {
          "question": "What does mMTC focus on?",
          "options": [
            "High data rates",
            "Low latency",
            "Massive number of connected devices",
            "High mobility"
          ],
          "explanation": "mMTC (Massive Machine-Type Communication) supports massive numbers of connected devices, particularly for IoT applications.",
          "correctAnswer": [2]
        },
        {
          "question": "Which technology is NOT mentioned as being utilized by 5G networks?",
          "options": [
            "Massive MIMO",
            "Beamforming",
            "Analog modulation",
            "Network slicing"
          ],
          "explanation": "5G networks use advanced digital technologies; analog modulation is not a key 5G technology mentioned in modern cellular systems.",
          "correctAnswer": [2]
        },
        {
          "question": "What type of applications benefit most from eMBB?",
          "options": [
            "Industrial automation",
            "4K/8K video streaming and VR",
            "IoT sensor networks",
            "Basic voice calls"
          ],
          "explanation": "eMBB is designed for applications requiring very high data rates like 4K/8K video streaming and virtual reality.",
          "correctAnswer": [1]
        }
      ]
    },
    "passage_10": {
      "title": "Network Architecture Evolution and Core Components",
      "passage": "The evolution from 4G LTE to 5G involves significant changes in network architecture. 4G networks use eNodeB (evolved NodeB) as base stations connected to the Evolved Packet Core (EPC), which includes components like MME (Mobility Management Entity), SGW (Serving Gateway), and PGW (PDN Gateway). 5G introduces gNodeB as the new base station and implements a Service-Based Architecture (SBA) in the core network. The 5G core includes functions like AMF (Access and Mobility Management Function), SMF (Session Management Function), and UPF (User Plane Function). 5G deployment can be implemented in Non-Standalone (NSA) mode, leveraging existing 4G infrastructure, or Standalone (SA) mode with a fully independent 5G core network. This architectural evolution enables better flexibility, scalability, and support for diverse service requirements.",
      "questions": [
        {
          "question": "What is the base station called in 4G LTE networks?",
          "options": [
            "NodeB",
            "eNodeB",
            "gNodeB",
            "Base Station"
          ],
          "explanation": "4G LTE networks use eNodeB (evolved NodeB) as their base stations.",
          "correctAnswer": [1]
        },
        {
          "question": "What does AMF stand for in 5G core networks?",
          "options": [
            "Advanced Mobility Function",
            "Access and Mobility Management Function",
            "Automatic Management Function",
            "Access Management Framework"
          ],
          "explanation": "AMF stands for Access and Mobility Management Function, one of the key components in 5G core networks.",
          "correctAnswer": [1]
        },
        {
          "question": "What is the difference between NSA and SA deployment modes?",
          "options": [
            "NSA uses 4G infrastructure, SA is fully independent 5G",
            "NSA is faster than SA",
            "SA uses 4G infrastructure, NSA is independent",
            "There is no difference"
          ],
          "explanation": "NSA (Non-Standalone) leverages existing 4G infrastructure, while SA (Standalone) uses fully independent 5G core network.",
          "correctAnswer": [0]
        },
        {
          "question": "What type of architecture does 5G core implement?",
          "options": [
            "Hierarchical Architecture",
            "Service-Based Architecture",
            "Centralized Architecture",
            "Distributed Architecture"
          ],
          "explanation": "5G core implements a Service-Based Architecture (SBA) which provides better flexibility and scalability.",
          "correctAnswer": [1]
        },
        {
          "question": "Which component is NOT part of the 4G EPC?",
          "options": [
            "MME",
            "SGW",
            "AMF",
            "PGW"
          ],
          "explanation": "AMF (Access and Mobility Management Function) is a 5G core component, not part of the 4G EPC (Evolved Packet Core).",
          "correctAnswer": [2]
        }
      ]
    },

  "passage_11": {
    "title": "Guided Media in Communication Systems",
    "passage": "Guided media refers to transmission that takes place through a physical path such as wires or cables. Examples include twisted pair cable, coaxial cable, and optical fiber. Twisted pair consists of two copper wires twisted together, available as UTP (Unshielded) and STP (Shielded). Coaxial cable has a central copper conductor, insulation, shielding, and outer cover. Optical fiber, made of glass or plastic, is the fastest medium, transmitting data as light.",
    "questions": [
      {
        "question": "Guided media is also called:",
        "options": [
          "Wireless media",
          "Bounded media",
          "Satellite channel",
          "Frequency band"
        ],
        "explanation": "Guided media is also known as bounded media because it uses physical boundaries (cables/wires) to contain and direct the transmission signal.",
        "correctAnswer": [1]
      },
      {
        "question": "Twisted pair consists of:",
        "options": [
          "Two copper wires twisted together",
          "A single copper wire",
          "Glass fiber",
          "Aluminum strip"
        ],
        "explanation": "Twisted pair cable is constructed using two copper wires that are twisted together to reduce electromagnetic interference.",
        "correctAnswer": [0]
      },
      {
        "question": "Which guided medium is fastest?",
        "options": [
          "Twisted pair",
          "Coaxial cable",
          "Optical fiber",
          "Copper wire"
        ],
        "explanation": "Optical fiber is the fastest guided medium as it transmits data using light signals, achieving much higher speeds than electrical signals in copper-based media.",
        "correctAnswer": [2]
      },
      {
        "question": "UTP cable is commonly used in:",
        "options": [
          "LAN",
          "Satellite communication",
          "Wi-Fi",
          "GPS"
        ],
        "explanation": "Unshielded Twisted Pair (UTP) cables are commonly used in Local Area Networks (LANs) for connecting devices within buildings.",
        "correctAnswer": [0]
      },
      {
        "question": "Coaxial cable is mainly used in:",
        "options": [
          "TV networks and broadband",
          "LAN only",
          "Wi-Fi",
          "Bluetooth"
        ],
        "explanation": "Coaxial cables are primarily used for television networks and broadband internet connections due to their good shielding and bandwidth characteristics.",
        "correctAnswer": [0]
      }
    ]
  },
  "passage_12": {
    "title": "Unguided Media in Communication Systems",
    "passage": "In unguided media, data is transmitted without any physical medium, using electromagnetic waves. Examples include radio waves, microwaves, infrared, and satellite communication. Radio waves are omnidirectional and used in FM radio, TV, and mobiles. Microwaves need line-of-sight and are used in Wi-Fi, Bluetooth, and satellites. Infrared is short-range, used in remotes and printers, but cannot pass through walls. Satellites cover large areas and support GPS, weather forecasting, and broadcasting.",
    "questions": [
      {
        "question": "Unguided media is also called:",
        "options": [
          "Wired media",
          "Bounded media",
          "Wireless media",
          "Digital media"
        ],
        "explanation": "Unguided media is also called wireless media because it transmits data without physical connections, using electromagnetic waves through air or space.",
        "correctAnswer": [2]
      },
      {
        "question": "Which wave is omni-directional?",
        "options": [
          "Microwave",
          "Radio wave",
          "Infrared",
          "Optical wave"
        ],
        "explanation": "Radio waves are omnidirectional, meaning they can propagate in all directions from the transmitter, making them suitable for broadcasting applications.",
        "correctAnswer": [1]
      },
      {
        "question": "Infrared waves are used in:",
        "options": [
          "Mobile phones",
          "Printers and remotes",
          "Satellites",
          "Wi-Fi towers"
        ],
        "explanation": "Infrared waves are commonly used in short-range applications like TV remotes and some printer connections due to their limited range and inability to pass through obstacles.",
        "correctAnswer": [1]
      },
      {
        "question": "Which requires line-of-sight?",
        "options": [
          "Radio waves",
          "Microwaves",
          "Infrared",
          "Optical fiber"
        ],
        "explanation": "Microwaves require line-of-sight communication, meaning there should be no physical obstructions between the transmitter and receiver for effective transmission.",
        "correctAnswer": [1]
      },
      {
        "question": "Satellite communication is used in:",
        "options": [
          "LAN",
          "GPS & international broadcasting",
          "Bluetooth",
          "Ethernet"
        ],
        "explanation": "Satellite communication provides wide area coverage and is extensively used for GPS navigation systems and international broadcasting services.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_13": {
    "title": "Modulation in Communication Systems",
    "passage": "Modulation is the process of varying a carrier signal in accordance with the information signal. It is necessary because low-frequency signals cannot travel long distances effectively. In Amplitude Modulation (AM), the amplitude of the carrier varies. In Frequency Modulation (FM), the frequency varies, and in Phase Modulation (PM), the phase varies. Digital modulation techniques include ASK, FSK, PSK, and QAM, which are widely used in Wi-Fi, 4G, and 5G.",
    "questions": [
      {
        "question": "Modulation is used to:",
        "options": [
          "Reduce bandwidth",
          "Transmit signals over long distances",
          "Increase antenna size",
          "Eliminate carriers"
        ],
        "explanation": "Modulation is primarily used to enable effective transmission of signals over long distances by converting low-frequency information signals to high-frequency carrier signals.",
        "correctAnswer": [1]
      },
      {
        "question": "In AM, which parameter of carrier changes?",
        "options": [
          "Frequency",
          "Amplitude",
          "Phase",
          "Wavelength"
        ],
        "explanation": "In Amplitude Modulation (AM), the amplitude of the carrier signal is varied in accordance with the information signal while frequency and phase remain constant.",
        "correctAnswer": [1]
      },
      {
        "question": "In FM, which parameter of carrier varies?",
        "options": [
          "Amplitude",
          "Frequency",
          "Phase",
          "Bandwidth"
        ],
        "explanation": "In Frequency Modulation (FM), the frequency of the carrier signal is varied according to the information signal while amplitude remains constant.",
        "correctAnswer": [1]
      },
      {
        "question": "Which is NOT a digital modulation technique?",
        "options": [
          "ASK",
          "PSK",
          "AM",
          "QAM"
        ],
        "explanation": "AM (Amplitude Modulation) is an analog modulation technique, while ASK, PSK, and QAM are digital modulation techniques used for transmitting digital data.",
        "correctAnswer": [2]
      },
      {
        "question": "QAM is a combination of:",
        "options": [
          "AM + FM",
          "ASK + PSK",
          "FSK + PSK",
          "AM + PCM"
        ],
        "explanation": "QAM (Quadrature Amplitude Modulation) combines both Amplitude Shift Keying (ASK) and Phase Shift Keying (PSK) to achieve higher data rates.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_14": {
    "title": "Pulse Modulation Techniques",
    "passage": "Pulse modulation transmits signals in the form of pulses instead of continuous waves. In Pulse Amplitude Modulation (PAM), the pulse height varies. In Pulse Width Modulation (PWM), the duration of pulses varies. In Pulse Position Modulation (PPM), the time position of pulses shifts. In Pulse Code Modulation (PCM), the signal is sampled, quantized, and encoded into binary digits, and is used in digital telephony, CDs, and computer audio.",
    "questions": [
      {
        "question": "In PAM, which property varies?",
        "options": [
          "Width",
          "Position",
          "Amplitude",
          "Frequency"
        ],
        "explanation": "In Pulse Amplitude Modulation (PAM), the amplitude or height of the pulses varies according to the information signal while other parameters remain constant.",
        "correctAnswer": [2]
      },
      {
        "question": "In PWM, which property varies?",
        "options": [
          "Width of pulses",
          "Amplitude",
          "Phase",
          "Frequency"
        ],
        "explanation": "In Pulse Width Modulation (PWM), the width or duration of the pulses varies according to the information signal while amplitude remains constant.",
        "correctAnswer": [0]
      },
      {
        "question": "PPM changes:",
        "options": [
          "Pulse width",
          "Pulse amplitude",
          "Pulse time position",
          "Frequency"
        ],
        "explanation": "In Pulse Position Modulation (PPM), the time position of the pulses shifts according to the information signal while amplitude and width remain constant.",
        "correctAnswer": [2]
      },
      {
        "question": "Which modulation is digital?",
        "options": [
          "PAM",
          "PCM",
          "PWM",
          "PPM"
        ],
        "explanation": "PCM (Pulse Code Modulation) is a digital modulation technique that converts analog signals to digital form through sampling, quantization, and encoding.",
        "correctAnswer": [1]
      },
      {
        "question": "PCM involves:",
        "options": [
          "Filtering and modulation",
          "Sampling, Quantization, Encoding",
          "Frequency division",
          "None"
        ],
        "explanation": "PCM involves three main steps: sampling the analog signal, quantizing the sampled values, and encoding them into binary digits.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_15": {
    "title": "Mobile Communication System Architecture",
    "passage": "A mobile communication system consists of Mobile Station (MS), Base Station (BS), and Mobile Switching Center (MSC). MS includes mobile equipment and SIM card. The BS handles radio communication and is controlled by a Base Station Controller (BSC). MSC manages switching, roaming, and billing. Cellular networks use frequency reuse to maximize spectrum. Handover transfers active calls between cells. GSM uses hard handover ('break before make'), while CDMA uses soft handover ('make before break').",
    "questions": [
      {
        "question": "Mobile Station consists of:",
        "options": [
          "Antenna + BTS",
          "SIM + Mobile Equipment",
          "MSC + BSC",
          "Only SIM"
        ],
        "explanation": "A Mobile Station (MS) consists of two main components: the SIM card (which contains subscriber information) and the mobile equipment (the actual phone hardware).",
        "correctAnswer": [1]
      },
      {
        "question": "Which manages switching and roaming?",
        "options": [
          "MS",
          "BS",
          "MSC",
          "BSC"
        ],
        "explanation": "The Mobile Switching Center (MSC) is responsible for managing call switching, roaming services, and billing functions in a mobile network.",
        "correctAnswer": [2]
      },
      {
        "question": "Frequency reuse is used for:",
        "options": [
          "Increasing antenna size",
          "Maximizing spectrum efficiency",
          "Reducing frequency",
          "Increasing cost"
        ],
        "explanation": "Frequency reuse is a technique used in cellular networks to maximize spectrum efficiency by reusing the same frequencies in non-adjacent cells.",
        "correctAnswer": [1]
      },
      {
        "question": "GSM uses which type of handover?",
        "options": [
          "Soft",
          "Hard",
          "Both",
          "None"
        ],
        "explanation": "GSM (Global System for Mobile Communications) uses hard handover, which follows a 'break before make' approach where the old connection is terminated before establishing a new one.",
        "correctAnswer": [1]
      },
      {
        "question": "Soft handover means:",
        "options": [
          "Break before make",
          "Make before break",
          "Frequency hopping",
          "None"
        ],
        "explanation": "Soft handover uses a 'make before break' approach where a new connection is established before terminating the old one, providing seamless connectivity.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_16": {
    "title": "Advanced Guided Media Technologies",
    "passage": "Guided media are physical channels such as cables/wires through which data is transmitted in a network. Types include twisted pair cable (UTP and STP), coaxial cable, and optical fiber. UTP is common in LANs, while STP provides extra shielding. Coaxial cable, used in TV and broadband, offers better shielding and bandwidth. Optical fiber, made from silica glass, transmits data with light at very high speeds and with immunity to electromagnetic interference. There are single-mode (long distance) and multimode (short distance) fiber types.",
    "questions": [
      {
        "question": "Which of the following is a feature of Unshielded Twisted Pair (UTP) cable?",
        "options": [
          "It is used only for satellite communication",
          "It includes a metallic shield",
          "It typically supports data rates up to 10 Gbps over 100 meters",
          "It is more expensive than coaxial cable"
        ],
        "explanation": "Modern UTP cables (like Cat 6A) can support data rates up to 10 Gbps over distances of 100 meters, making them suitable for high-speed LAN applications.",
        "correctAnswer": [2]
      },
      {
        "question": "What is the main function of the cladding in an optical fiber cable?",
        "options": [
          "To transmit radio waves",
          "To increase data encryption",
          "To reflect light back into the core",
          "To provide power to devices"
        ],
        "explanation": "The cladding in optical fiber has a lower refractive index than the core, causing total internal reflection that keeps light signals within the core.",
        "correctAnswer": [2]
      },
      {
        "question": "Which medium is considered immune to electromagnetic interference?",
        "options": [
          "UTP",
          "STP",
          "Coaxial cable",
          "Optical fiber"
        ],
        "explanation": "Optical fiber is immune to electromagnetic interference because it uses light signals instead of electrical signals for data transmission.",
        "correctAnswer": [3]
      },
      {
        "question": "In which application is coaxial cable most commonly used?",
        "options": [
          "Bluetooth peripherals",
          "TV networks and broadband internet",
          "WAN backbone",
          "Satellite communication"
        ],
        "explanation": "Coaxial cable is widely used in television networks and broadband internet connections due to its excellent shielding properties and bandwidth capabilities.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the primary material used in the core of an optical fiber?",
        "options": [
          "Copper",
          "Aluminium",
          "Pure silica glass",
          "Steel"
        ],
        "explanation": "The core of optical fiber is made from pure silica glass, which provides excellent optical properties for light transmission with minimal loss.",
        "correctAnswer": [2]
      }
    ]
  },
  "passage_17": {
    "title": "Advanced Unguided Media Technologies",
    "passage": "Unguided or wireless media transmit data through electromagnetic waves without physical media. Types include radio waves (used in mobile phones and radio), microwaves (used in satellite and Wi-Fi, requiring line-of-sight), infrared (for short-range like TV remotes), and satellite communication, which covers wide areas for GPS and weather forecasting.",
    "questions": [
      {
        "question": "Which wireless medium requires line-of-sight between transmitter and receiver?",
        "options": [
          "Radio Waves",
          "Microwave",
          "Infrared",
          "Satellite"
        ],
        "explanation": "Microwave communication requires line-of-sight between transmitter and receiver because microwaves travel in straight lines and cannot penetrate obstacles effectively.",
        "correctAnswer": [1]
      },
      {
        "question": "Which device commonly uses infrared transmission?",
        "options": [
          "Mobile phones",
          "Wi-Fi routers",
          "TV remote controls",
          "Satellite dishes"
        ],
        "explanation": "TV remote controls commonly use infrared transmission for short-range communication with televisions and other home entertainment devices.",
        "correctAnswer": [2]
      },
      {
        "question": "Which medium provides global coverage for communication?",
        "options": [
          "Coaxial Cable",
          "Satellite Communication",
          "STP",
          "Infrared"
        ],
        "explanation": "Satellite communication provides global coverage by using satellites positioned in orbit to relay signals across vast distances worldwide.",
        "correctAnswer": [1]
      },
      {
        "question": "What is a common real-world use of radio waves?",
        "options": [
          "Fiber-optic networking",
          "TV broadcasting",
          "Digital video disc players",
          "Wired LANs"
        ],
        "explanation": "Radio waves are extensively used for TV broadcasting, allowing television signals to be transmitted over long distances to reach wide audiences.",
        "correctAnswer": [1]
      },
      {
        "question": "Which statement about wireless media is true?",
        "options": [
          "Signals cannot be sent over long distances",
          "It is also known as bounded media",
          "It is less secure than guided media",
          "It uses only visible light"
        ],
        "explanation": "Wireless media is generally less secure than guided media because wireless signals can be intercepted more easily as they propagate through open air.",
        "correctAnswer": [2]
      }
    ]
  },
  "passage_18": {
    "title": "Digital Electronics Fundamentals",
    "passage": "Digital electronics processes signals as discrete binary values (0s and 1s), using logic gates such as AND, OR, and NOT. Advantages over analog include high noise immunity, ease of storing/processing information, and flexibility. Common number systems include binary, decimal, octal, and hexadecimal. Circuits are classified as combinational (output depends on current input) or sequential (depends on input and memory). Applications include computers, communication, and embedded systems.",
    "questions": [
      {
        "question": "Which logic gate produces an output of 1 only if all its inputs are 1?",
        "options": [
          "OR",
          "NAND",
          "AND",
          "XOR"
        ],
        "explanation": "The AND gate produces an output of 1 only when all of its inputs are 1. If any input is 0, the output will be 0.",
        "correctAnswer": [2]
      },
      {
        "question": "Which of the following is a universal gate?",
        "options": [
          "XOR",
          "NAND",
          "XNOR",
          "OR"
        ],
        "explanation": "NAND gate is a universal gate because any Boolean function can be implemented using only NAND gates, making it functionally complete.",
        "correctAnswer": [1]
      },
      {
        "question": "Which number system uses digits 0-7?",
        "options": [
          "Binary",
          "Octal",
          "Hexadecimal",
          "Decimal"
        ],
        "explanation": "The octal number system uses base 8 and employs digits from 0 to 7, making it useful for representing binary data in a more compact form.",
        "correctAnswer": [1]
      },
      {
        "question": "What type of circuit is a counter?",
        "options": [
          "Combinational",
          "Sequential",
          "Analog",
          "Modulator"
        ],
        "explanation": "A counter is a sequential circuit because its output depends on both current input and its internal memory (previous states), allowing it to count sequences.",
        "correctAnswer": [1]
      },
      {
        "question": "Which is NOT an advantage of digital electronics?",
        "options": [
          "Easy to process information",
          "Prone to high noise",
          "Reliable and flexible",
          "Data can be encrypted"
        ],
        "explanation": "Being prone to high noise is actually a disadvantage. Digital electronics has high noise immunity, meaning it is resistant to noise, not prone to it.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_19": {
    "title": "Advanced Modulation Techniques",
    "passage": "Modulation involves varying a property of a high-frequency carrier signal according to an information signal. Analog modulation includes AM (amplitude varies), FM (frequency varies), and PM (phase varies). Digital modulation includes ASK, FSK, PSK, QAM. Modulation reduces antenna size, improves signal quality, enables multiplexing, and allows long-distance communication.",
    "questions": [
      {
        "question": "Which property changes in Amplitude Modulation (AM)?",
        "options": [
          "Carrier frequency",
          "Carrier amplitude",
          "Carrier phase",
          "Message frequency"
        ],
        "explanation": "In Amplitude Modulation (AM), the amplitude of the high-frequency carrier signal is varied in proportion to the information signal while frequency and phase remain constant.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the main advantage of Frequency Modulation (FM) over AM?",
        "options": [
          "Simpler receiver",
          "Greater noise immunity",
          "Lower bandwidth",
          "Works only at low frequencies"
        ],
        "explanation": "FM has greater noise immunity than AM because noise primarily affects amplitude, and FM information is contained in frequency variations rather than amplitude changes.",
        "correctAnswer": [1]
      },
      {
        "question": "Which digital modulation technique changes the carrier frequency with data?",
        "options": [
          "ASK",
          "PSK",
          "FSK",
          "QAM"
        ],
        "explanation": "FSK (Frequency Shift Keying) changes the carrier frequency according to the digital data, using different frequencies to represent different binary states.",
        "correctAnswer": [2]
      },
      {
        "question": "Why is modulation necessary in communication?",
        "options": [
          "To increase antenna size",
          "To transmit baseband signals over long distances",
          "Only for voice signals",
          "To slow down data rate"
        ],
        "explanation": "Modulation is necessary to transmit baseband (low-frequency) signals over long distances by converting them to high-frequency signals that can propagate effectively.",
        "correctAnswer": [1]
      },
      {
        "question": "Which modulation scheme is widely used in Wi-Fi and LTE systems?",
        "options": [
          "AM",
          "FSK",
          "QAM",
          "PWM"
        ],
        "explanation": "QAM (Quadrature Amplitude Modulation) is widely used in modern Wi-Fi and LTE systems because it can achieve high data rates by combining both amplitude and phase modulation.",
        "correctAnswer": [2]
      }
    ]
  },
  "passage_20": {
    "title": "Advanced Pulse Modulation Techniques",
    "passage": "Pulse modulation transmits signals using pulses. Analog pulse techniques include PAM, PWM, and PPM. Pulse Code Modulation (PCM) is a digital technique involving sampling, quantization, and encoding. Applications include Ethernet, audio/video, and communication systems.",
    "questions": [
      {
        "question": "In which technique does the pulse amplitude represent the signal?",
        "options": [
          "PWM",
          "PCM",
          "PAM",
          "ASK"
        ],
        "explanation": "In PAM (Pulse Amplitude Modulation), the amplitude or height of the pulses directly represents the analog signal values at sampling instants.",
        "correctAnswer": [2]
      },
      {
        "question": "Which modulation is the first step in PCM?",
        "options": [
          "PWM",
          "PAM",
          "FSK",
          "QAM"
        ],
        "explanation": "PAM (Pulse Amplitude Modulation) is the first step in PCM, where the analog signal is sampled to produce amplitude-modulated pulses before quantization and encoding.",
        "correctAnswer": [1]
      },
      {
        "question": "Which pulse modulation method is digital?",
        "options": [
          "PAM",
          "PWM",
          "PCM",
          "PPM"
        ],
        "explanation": "PCM (Pulse Code Modulation) is a digital modulation method that converts analog signals to digital form through sampling, quantization, and binary encoding.",
        "correctAnswer": [2]
      },
      {
        "question": "What changes in Pulse Width Modulation (PWM)?",
        "options": [
          "Amplitude",
          "Width",
          "Position",
          "Phase"
        ],
        "explanation": "In PWM (Pulse Width Modulation), the width or duration of the pulses varies according to the signal amplitude while the amplitude of pulses remains constant.",
        "correctAnswer": [1]
      },
      {
        "question": "Where is Pulse Position Modulation (PPM) commonly used?",
        "options": [
          "TV remotes",
          "Optical communication",
          "Ethernet",
          "Motor control"
        ],
        "explanation": "PPM (Pulse Position Modulation) is commonly used in optical communication systems because it's efficient for transmitting digital data using light pulses.",
        "correctAnswer": [1]
      }
    ]
  }
    }
  },
  unit2: {
    // Placeholder - copy of unit1 for now
    module6: [
  {
    "question": "When a 4G terminal is turned on, it",
    "options": [
      "performs a \"UE-triggered Service Request\" procedure to activate the 4G service,",
      "performs simultaneously an \"Attach\" procedure and a \"PDN connectivity request\" procedure (to get an IP address),",
      "attaches itself to the network and requests the establishment of connectivity later on only if there is data to transmit,",
      "does not do anything."
    ],
    "explanation": "When a 4G terminal powers on, it must first attach to the network and obtain an IP address before it can communicate. This is accomplished by simultaneously executing the Attach procedure (to register with the network) and the PDN Connectivity Request procedure (to establish a data connection and receive an IP address from the PGW).",
    "correctAnswer": [1]
  },
  {
    "question": "After a long period of inactivity of a terminal on the radio channel (neither transmissions nor receptions of data packets), the network",
    "options": [
      "establishes an idle bearer",
      "only releases the radio connection,",
      "only releases the radio connection, the S1-AP connection and the S1 bearer",
      "releases the radio connection, the S1-AP connections and all data bearers and control tunnels"
    ],
    "explanation": "After prolonged inactivity, the network initiates a transition to idle mode to save resources. This involves releasing the radio connection (between UE and eNodeB), the S1-AP signaling connection (between eNodeB and MME), and the S1 bearer (user plane connection between eNodeB and SGW). However, the S5/S8 bearers between SGW and PGW are maintained to preserve the UE's IP address and connection state.",
    "correctAnswer": [2]
  },
  {
    "question": "Continuation of the question. Just after the previous action is done, the UE is in state",
    "options": [
      "EMM-Deregistered / ECM-Idle",
      "EMM-Deregistered / ECM-Connected",
      "EMM-Registered / ECM-Idle",
      "EMM-Registered / ECM-Connected"
    ],
    "explanation": "After the network releases the radio and S1 connections due to inactivity, the UE transitions to EMM-Registered / ECM-Idle state. It remains registered with the network (EMM-Registered) so it can quickly resume communication, but the signaling connection is released (ECM-Idle) to conserve resources.",
    "correctAnswer": [2]
  },
  {
    "question": "Continuation of the question. The UE has no longer",
    "options": [
      "RNTI",
      "IMSI",
      "TMSI",
      "IP address"
    ],
    "explanation": "When the UE transitions to idle mode, it loses its RNTI (Radio Network Temporary Identifier), which is only valid while there is an active radio connection. The RNTI is used for scheduling and identifying the UE on the radio interface. The UE retains its IMSI, TMSI (for network identification), and IP address (maintained by the SGW-PGW connection).",
    "correctAnswer": [0]
  },
  {
    "question": "Continuation of the question. After one hour, the terminal has data to transmit. Which procedure is executed?",
    "options": [
      "EMM Attach Request",
      "PDN Connectivity Request",
      "Network-triggered Service Request",
      "UE-triggered Service Request"
    ],
    "explanation": "When a UE in ECM-Idle state (but still EMM-Registered) has data to transmit, it initiates a UE-triggered Service Request procedure. This procedure re-establishes the radio and S1 connections without requiring a full attach procedure, since the UE is still registered with the network.",
    "correctAnswer": [3]
  },
  {
    "question": "After the UE-triggered Service Request and Network-triggered Service Request procedures,",
    "options": [
      "the terminal is in the EMM Deregistered and ECM-idle state,",
      "the terminal is in the EMM Registered and ECM-idle state,",
      "the terminal is in the EMM Registered and ECM-connected state,",
      "nothing can be said on the state of the terminal."
    ],
    "explanation": "After successfully completing either a UE-triggered or Network-triggered Service Request procedure, the radio and S1 signaling connections are re-established. The terminal transitions to EMM-Registered (it was already registered) and ECM-Connected state (signaling connection is now active), allowing data transmission to resume.",
    "correctAnswer": [2]
  },
  {
    "question": "Let us consider a terminal that correctly works on the network but has not been used for the last few minutes. At 4:00 am, an application triggers the transmission of an IP packet every 500 ms to a server.",
    "options": [
      "all the packets reach the server in the same amount of time (for example, they arrive at 4:00:00.04, 4:00:00.54, 4:00:01.04, 4:00:01.54)",
      "the first packet requires more time than the following packet to reach the server (for example, they arrive at 4:00:00.34, 4:00:00.54, 4:00:01.04, 4:00:01.54)",
      "the packets need more and more time to reach the server (for example, they arrive at 4:00:00.04, 4:00:00.58, 4:00:01.12, 4:00:01.66)",
      "the first packet never arrives and the next ones arrive immediately (for example, they arrive at 4:00:00.50, 4:00:01.00, 4:00:01.50)"
    ],
    "explanation": "Since the terminal hasn't been used for several minutes, it's likely in ECM-Idle state. When the first packet needs to be sent, the UE must perform a Service Request procedure to re-establish the radio and S1 connections, which takes additional time (typically 30-300ms). Subsequent packets can use the already-established connections and experience normal transmission delays.",
    "correctAnswer": [1]
  },
  {
    "question": "When a specific guarantee on the quality of service is required for a given data flow",
    "options": [
      "a Network-triggered Service Request procedure should be executed",
      "a PDN Connectivity Request procedure should be executed",
      "a dedicated bearer should be set-up"
    ],
    "explanation": "When specific QoS (Quality of Service) guarantees are needed for a particular data flow (such as low latency for voice calls or guaranteed bandwidth for video streaming), the network establishes a dedicated bearer. Dedicated bearers have specific QoS parameters and are separate from the default bearer, ensuring the required service quality for that flow.",
    "correctAnswer": [2]
  },

  {
    "question": "Does the SeNB need to choose a TEID for the X2 bearer (also called X2 GTP-U tunnel)?",
    "options": [
      "Yes, because it is necessary to route uplink data,",
      "Yes, because it is necessary to cipher the tunnel between the SeNB and the TeNB",
      "No, because no user data is transmitted from the TeNB to the SeNB",
      "No, because the same TEID is used by the SeNB and the TeNB."
    ],
    "explanation": "The SeNB does not need to choose a TEID for the X2 bearer because during handover, user data only flows in one direction over X2: from the SeNB to the TeNB (downlink data forwarding). There is no uplink data transmitted from TeNB to SeNB over X2, so no TEID is needed on the SeNB side for the X2 tunnel.",
    "correctAnswer": [2]
  },
  {
    "question": "Why should downlink data be routed to the SeNB and forwarded to the TeNB during the \"handover execution\" phase?",
    "options": [
      "because it is more efficient",
      "because the SGW does not know the IP address of the terminal (UE) and cannot send the data directly",
      "because the SGW does not know that a handover is triggered before step 8"
    ],
    "explanation": "During the handover execution phase (before step 8), the SGW has not yet been informed about the handover. The SGW continues to send downlink data to the SeNB because it doesn't know the handover is in progress. The SeNB forwards this data to the TeNB over the X2 interface to minimize packet loss. Only after step 8 (Path Switch) does the SGW learn about the new eNB and start sending data directly to the TeNB.",
    "correctAnswer": [2]
  }

],
    module2: [
  {
    "question": "In 4G, the USIM card",
    "options": [
      "is not required any longer",
      "contains all the procedures to manage the radio channel",
      "contains the international mobile subscriber identity",
      "contains the subscriber's banking information"
    ],
    "explanation": "The USIM card is still required in 4G as it contains the IMSI (International Mobile Subscriber Identity), which is essential for identifying the subscriber in the network.",
    "correctAnswer": [2]
  },
  {
    "question": "In a cellular network, the smaller a cell is",
    "options": [
      "the smaller the capacity in Mbit/s/km2 (bit rate per square kilometer) is",
      "the greater the capacity in Mbit/s/km2 (bit rate per square kilometer) is",
      "the worse the quality of the link is",
      "the smaller the antenna size should be"
    ],
    "explanation": "Smaller cells increase the frequency reuse factor, which improves capacity (Mbit/s/km2).",
    "correctAnswer": [1]
  },
  {
    "question": "The coverage of a base station is",
    "options": [
      "always circular",
      "always as large as the country",
      "the same for all base stations",
      "depends on the environment (rural area, city center, suburbs, etc)",
      "deduced by the terminals by use of the beacon channel sent by the base station"
    ],
    "explanation": "Base station coverage is not fixed but depends on environment and is determined by terminals through beacon channel measurements.",
    "correctAnswer": [3, 4]
  },
  {
    "question": "The beacon channel is used",
    "options": [
      "to enable signal strength measurement at the terminal side",
      "to enable transmission power measurement at the terminal side",
      "to broadcast information such as the identity of the operator",
      "in zones not covered by an operator, to indicate in which direction to move to get coverage"
    ],
    "explanation": "The beacon channel is used for measuring signal strength and broadcasting information like operator identity.",
    "correctAnswer": [0, 2]
  },
  {
    "question": "The 4G core network of a mobile operator",
    "options": [
      "is an IP network",
      "is a network using a Layer3 protocol based on the MNP protocol (Mobile Network Protocol)",
      "is a network based on Signalling System No. 7 used by telecom operators"
    ],
    "explanation": "The 4G core network (EPC) is a fully IP-based network architecture.",
    "correctAnswer": [0]
  },
  {
    "question": "We consider a 4G subscriber who visits a Web page. Select the devices that are concerned by the user-data packet flow between the mobile terminal and the Web server",
    "options": [
      "eNodeB",
      "HSS",
      "MME",
      "PGW",
      "SGW"
    ],
    "explanation": "For user-plane data flow, the involved elements are eNodeB, SGW, and PGW. HSS and MME are part of the control-plane, not the user-plane.",
    "correctAnswer": [0, 3, 4]
  },
  {
    "question": "Are two base stations exchanging messages on the X2 interface necessarily connected through a direct link?",
    "options": [
      "Yes",
      "No"
    ],
    "explanation": "X2 communication is logical and does not necessarily require a direct physical link between base stations.",
    "correctAnswer": [1]
  },
  {
    "question": "When someone turns on his 4G terminal and connects to a 4G network,",
    "options": [
      "the subscriber profile stored in the terminal is transferred to the HSS",
      "the subscriber profile is permanently stored in the MME and is locally activated",
      "the subscriber profile permanently stored in the HSS is transferred to the MME"
    ],
    "explanation": "The subscriber profile is stored in the HSS and sent to the MME during the attach procedure for session management.",
    "correctAnswer": [2]
  },
  {
    "question": "The HSS",
    "options": [
      "contains the list of the network subscribers",
      "is queried by the MME so the latter can have the profile of the subscribers who are in the zone managed by that MME",
      "is queried by the MME, the SGW and the PGW so all retrieve the subscriber profile and speed up access control mechanisms",
      "contains the precise state of each terminal (idle, active, transferring) at any time"
    ],
    "explanation": "The HSS contains subscriber data and is queried by the MME for subscriber profiles. SGW/PGW do not directly query the HSS.",
    "correctAnswer": [0, 1]
  },

  {
    "question": "The \"X2AP Handover request\" message includes a TEID. This TEID is required to route data from the TeNB to the SGW. Which one is it?",
    "options": [
      "TEID of the S1 bearer (also called S1 GTP-U Tunnel) on the SeNB side",
      "TEID of the S1 bearer (also called S1 GTP-U Tunnel) on the TeNB side",
      "TEID of the S1 bearer (also called S1 GTP-U Tunnel) on the SGW side",
      "TEID of the X2 bearer (also called X2 GTP-U Tunnel) on the SeNB side",
      "TEID of the X2 bearer (also called X2 GTP-U Tunnel) on the TeNB side"
    ],
    "explanation": "The X2AP Handover request message includes the TEID of the S1 bearer on the SGW side. This allows the Target eNB (TeNB) to know where to forward uplink data from the UE after the handover, maintaining the uplink path to the SGW.",
    "correctAnswer": [2]
  },
  {
    "question": "The \"X2AP Handover request acknowledge\" message includes a TEID. This TEID is required to route data from the SeNB to the TeNB. Which one is it?",
    "options": [
      "TEID of the S1 bearer (also called S1 GTP-U Tunnel) on the SeNB side",
      "TEID of the S1 bearer (also called S1 GTP-U Tunnel) on the TeNB side",
      "TEID of the S1 bearer (also called S1 GTP-U Tunnel) on the SGW side",
      "TEID of the X2 bearer (also called X2 GTP-U Tunnel) on the SeNB side",
      "TEID of the X2 bearer (also called X2 GTP-U Tunnel) on the TeNB side"
    ],
    "explanation": "The X2AP Handover request acknowledge message includes the TEID of the X2 bearer on the TeNB side. This allows the Source eNB (SeNB) to forward downlink data to the Target eNB over the X2 interface during the handover execution phase, before the path is switched to go directly from SGW to TeNB.",
    "correctAnswer": [4]
  },
]
,
    module3: [
  {
    "question": "A 4G subscriber is uniquely and permanently identified by",
    "options": [
      "his phone number",
      "his IP address",
      "his GUTI",
      "his TMSI",
      "his IMSI"
    ],
    "explanation": "The IMSI (International Mobile Subscriber Identity) is the unique and permanent identifier for a 4G subscriber. Unlike temporary identifiers like TMSI or GUTI, the IMSI remains constant and is stored in the SIM card.",
    "correctAnswer": [4]
  },
  {
    "question": "In addition to memory, the SIM (or USIM) card must include a processor to:",
    "options": [
      "speed up authentication processing,",
      "prevent stolen terminals from being used,",
      "help old terminals with slow processors to process data,",
      "have the authentication processed by a hardware controlled by the operator."
    ],
    "explanation": "The processor in the SIM/USIM card ensures that authentication is handled by hardware controlled by the operator, providing a secure and trusted environment for cryptographic operations that cannot be compromised even if the terminal is malicious.",
    "correctAnswer": [3]
  },
  {
    "question": "The IMSI is permanently stored in (tick 2 boxes)",
    "options": [
      "the USIM card",
      "the eNodeB",
      "the HSS",
      "the MME",
      "the PGW",
      "the SGW",
      "the terminal"
    ],
    "explanation": "The IMSI is permanently stored in both the USIM card (which is inserted in the user's device) and the HSS (Home Subscriber Server), which is the master database containing subscriber information in the operator's network.",
    "correctAnswer": [0, 2]
  },
  {
    "question": "Select the security functions a 4G network provides (tick several boxes)",
    "options": [
      "terminal authentication by the network,",
      "network authentication by the terminal,",
      "user-data encryption,",
      "signaling encryption,",
      "integrity protection for signaling messages,",
      "integrity protection for user data,",
      "identity confidentiality."
    ],
    "explanation": "4G networks provide mutual authentication (both terminal and network authenticate each other), encryption for both user data and signaling, integrity protection for signaling messages, and identity confidentiality to protect subscriber privacy. User data integrity protection is not provided due to overhead concerns.",
    "correctAnswer": [0, 1, 2, 3, 4, 6]
  },
  {
    "question": "The use of authentication vectors (tick 2 boxes)",
    "options": [
      "makes the system vulnerable to eavesdropping,",
      "allows any (trusted) node in the 4G network to authenticate a terminal without revealing its secret key",
      "allows a visited network to authenticate a terminal but only if the secret key is forwarded to the HSS of the visited network.",
      "reduces the load of the HSS, which can simultaneously send several vectors and so limit the number of requests sent to it."
    ],
    "explanation": "Authentication vectors allow distributed authentication without exposing the secret key stored in the HSS. They also reduce HSS load by allowing multiple authentication vectors to be sent at once, reducing signaling overhead.",
    "correctAnswer": [1, 3]
  },
  {
    "question": "Which entities execute the authentication algorithm (f function in the course)? (tick 2 boxes)",
    "options": [
      "the SIM card (USIM)",
      "the terminal (UE)",
      "the eNodeB",
      "the MME",
      "the HSS",
      "a unique security center for all 4G operators"
    ],
    "explanation": "The authentication algorithm is executed by the SIM card (USIM) on the user side and by the HSS (Home Subscriber Server) on the network side. This ensures that the secret key never leaves these secure locations.",
    "correctAnswer": [0, 4]
  },
  {
    "question": "Which entities execute the data encryption algorithm on the radio channel? (tick 2 boxes)",
    "options": [
      "the SIM card (USIM)",
      "the terminal (UE)",
      "the eNodeB",
      "the MME",
      "the HSS",
      "a same security center for every 4G operators"
    ],
    "explanation": "Data encryption on the radio channel is performed between the terminal (UE) and the eNodeB (base station), as they are the endpoints of the radio interface where encryption/decryption needs to occur.",
    "correctAnswer": [1, 2]
  },
  {
    "question": "We consider the authentication mechanism. To minimize the signaling load, an engineer proposes an evolution of the standard: reduce the number of bits of the random number (the challenge) to 12 bits (instead of 128) and the number of bits of the signed result to 8 bits (instead of 32). (tick 2 boxes)",
    "options": [
      "it is a good idea because it will greatly reduce the size of authentication messages",
      "it is useless because the size of the authentication messages will not be significantly reduced due to the headers and other fields",
      "it will not reduce the security level if the challenge is still random",
      "it will not reduce the security level if the size of the secret key is kept",
      "it will reduce the security level because chances are higher to get twice the same challenge value",
      "it will reduce the security level because the challenge is no more a multiple of 32 bits, which is a standard length for processors."
    ],
    "explanation": "Reducing the challenge from 128 bits to 12 bits significantly increases the probability of challenge reuse, which weakens security. Additionally, the message size reduction would be negligible due to protocol headers and other fields that remain unchanged.",
    "correctAnswer": [1, 4]
  },
  {
    "question": "We assume that a packet is reduced to a single ASCII character (UTF-8 to be more precise). This is impossible in 4G but we will consider it here to have a simple exercise. The binary value of the code for character M is 0100 1101. We assume that the ciphering sequence is 1010 0110. The ciphered sequence is",
    "options": [
      "1111 0001",
      "1110 0011",
      "1110 1011",
      "1011 0111"
    ],
    "explanation": "To encrypt, we perform XOR operation between the plaintext and the ciphering sequence: 0100 1101 XOR 1010 0110 = 1110 1011",
    "correctAnswer": [2]
  },
  {
    "question": "Continuation of the previous question. To decode the sequence, the receiver",
    "options": [
      "performs a bit-wise XOR (exclusive Or) of the received sequence and the ciphering sequence,",
      "performs a bit-wise XNOR (exclusive Not Or) of the received sequence and the ciphering sequence,",
      "subtracts the hexadecimal value of the ciphering sequence from the hexadecimal value of the received sequence (in two's complement),",
      "adds the ciphering sequence to the received sequence."
    ],
    "explanation": "XOR encryption is symmetric - the same operation (XOR) is used for both encryption and decryption. To decrypt, the receiver performs XOR of the received ciphertext with the same ciphering sequence.",
    "correctAnswer": [0]
  },
  {
    "question": "In the context of this question and the next one, MAC means Message Authentication Code. The integrity control prevents a third party from modifying a message if the key used to calculate the MAC code remains secret",
    "options": [
      "prevents a third party from modifying a message only if it is encrypted",
      "prevents a third party from modifying a message if the key used to calculate the MAC code remains secret",
      "prevents a third party from modifying a message only if the third party does not change the MAC code",
      "prevents a third party from modifying a message only if the third party changes the length of this message"
    ],
    "explanation": "The MAC (Message Authentication Code) provides integrity protection by creating a cryptographic checksum using a secret key. Without knowing the key, an attacker cannot create a valid MAC for a modified message, thus the modification will be detected.",
    "correctAnswer": [1]
  },
  {
    "question": "The integrity control is",
    "options": [
      "faster if the MAC is longer,",
      "safer if the MAC is longer,",
      "less safe if the MAC is longer,",
      "equally safe no matter the size of the MAC."
    ],
    "explanation": "A longer MAC provides better security because it's harder for an attacker to guess or forge a valid MAC through brute force. With more bits, the probability of a successful random forgery decreases exponentially.",
    "correctAnswer": [1]
  },


  {
    "question": "The user now moves to cell E (covered by eNB E). What happens?",
    "options": [
      "The terminal listens to the beacon channel of eNB E but does not send any message",
      "The terminal listens to the beacon channel of eNB E and triggers a Tracking Area Update request. A tunnel is set up between SGW 1 and SGW 2",
      "The terminal listens to the beacon channel of eNB E, triggers a Tracking Area Update request. SGW-PGW tunnels are moved from SGW 1 to SGW 2",
      "The MME updates in its database the location of the terminal as soon as the latter is in the new cell."
    ],
    "explanation": "When the UE moves to cell E (covered by eNB E) which is connected to a different SGW (SGW 2), the UE triggers a TAU request. This results in the SGW-PGW tunnels being moved from the old SGW (SGW 1) to the new SGW (SGW 2) to maintain connectivity while preserving the UE's IP address and PDN connection.",
    "correctAnswer": [2]
  },
  {
    "question": "Can TAI 2 and TAI 3 be in the same list transmitted to a terminal?",
    "options": [
      "Yes, because the maximum flexibility is given to the operator regarding the management of tracking areas.",
      "Yes, because TAI 2 and TAI 3 correspond to neighbor cells.",
      "No, because a list is restricted to only one tracking area.",
      "No, because eNBs D and E are not connected to the same SGW and thus the SGW-PGW tunnel should be modified."
    ],
    "explanation": "TAI 2 and TAI 3 cannot be in the same list because eNBs D and E are connected to different SGWs (SGW 1 and SGW 2). If both TAIs were in the same list, the UE could move between them without triggering a TAU, but the network would need to modify the SGW-PGW tunnels when the UE actually moves, which cannot be done without explicit signaling from the UE.",
    "correctAnswer": [3]
  },
],
    module4: [
  {
    "question": "The radio transmission for 4G LTE systems is mainly based on",
    "options": [
      "CDMA (Code Division Multiple Access)",
      "OFDM (Orthogonal Frequency Division Multiplexing)",
      "UNB (Ultra Narrow Band)"
    ],
    "explanation": "4G LTE systems use OFDM (Orthogonal Frequency Division Multiplexing) as the primary radio transmission technology. OFDM divides the available spectrum into multiple orthogonal subcarriers, providing high spectral efficiency and resistance to multipath fading.",
    "correctAnswer": [1]
  },
  {
    "question": "In LTE modulation 256-QAM is possible. It is not mentioned in the course to keep things simple. Its name comes from the fact that it can reach 256 different states. How many bits can be transmitted in one 256-QAM symbol?",
    "options": [
      "1 bit / symbol",
      "2 bits / symbol",
      "3 bits / symbol",
      "4 bits / symbol",
      "6 bits / symbol",
      "8 bits / symbol"
    ],
    "explanation": "256-QAM can represent 256 different states. Since 2^8 = 256, each symbol can carry 8 bits of information. This is calculated as log2(256) = 8 bits per symbol.",
    "correctAnswer": [5]
  },
  {
    "question": "To share the radio resource among UEs, LTE (tick several boxes)",
    "options": [
      "Systematically allows collision but provides a collision resolution mechanism",
      "Splits the resource in time",
      "Splits the resource in sub-frequencies",
      "Uses orthogonal code sequences to distinguish users",
      "Uses an allocation mechanism to manage the resource"
    ],
    "explanation": "LTE uses OFDMA (Orthogonal Frequency Division Multiple Access) which splits resources in both time and frequency. The eNodeB uses a scheduler (allocation mechanism) to assign specific time-frequency resource blocks to different users, preventing collisions through coordinated access.",
    "correctAnswer": [1, 2, 4]
  },
  {
    "question": "Consider a UE that transmits data to a server.",
    "options": [
      "The UE can use any pair of resource blocks",
      "The UE has to scan all pairs of resource blocks to detect which ones are not used by other UEs",
      "The UE should only use pairs of resource blocks that are indicated in the current allocation table sent by the eNB (also known as PDCCH)",
      "The UE should only use pairs of resource blocks that were indicated 4-ms before in the allocation table sent by the eNB (also known as PDCCH)"
    ],
    "explanation": "In LTE uplink, the UE must use the resource blocks that were allocated to it 4ms earlier in the PDCCH (Physical Downlink Control Channel). This 4ms delay allows the UE time to prepare its transmission after receiving the allocation.",
    "correctAnswer": [3]
  },
  {
    "question": "Consider a UE that transmits data to a server.",
    "options": [
      "Each transport block is systematically acknowledged (in case of correct reception) by the eNB in the MAC layer",
      "Several transport blocks can be acknowledged (in case of correct reception) with the same Ack message by the eNB in the MAC layer",
      "Transport blocks are acknowledged (in case of correct reception) in the MAC layer only if there is a commitment by the operator on the quality of service",
      "Transport blocks are acknowledged (in case of correct reception) in the MAC layer only if acknowledgement mechanism are not activated in RLC Layer",
      "There is no acknowledgement in the MAC layer"
    ],
    "explanation": "In LTE, the MAC layer uses HARQ (Hybrid Automatic Repeat Request) where each transport block is individually and systematically acknowledged by the eNB upon correct reception. This provides fast, physical layer error recovery.",
    "correctAnswer": [0]
  },
  {
    "question": "To transmit data in real time (such as voice over IP) RLC should be used in:",
    "options": [
      "Transparent Mode",
      "Unacknowledged Mode (UM)",
      "Acknowledged Mode (AM)."
    ],
    "explanation": "For real-time services like voice over IP, RLC Unacknowledged Mode (UM) is used because it doesn't introduce the delays associated with retransmissions. Real-time traffic is delay-sensitive and can tolerate some packet loss better than delays from retransmissions.",
    "correctAnswer": [1]
  },
  {
    "question": "Choose the correct statement about the exchanges with a given UE in a system with one carrier (tick 3 boxes).",
    "options": [
      "On an eNB, there is only one MAC session.",
      "On an eNB, there can be several MAC sessions.",
      "On an eNB, there is only one RLC session.",
      "On an eNB, there can be several RLC sessions.",
      "On an eNB, there is only one PDCP session.",
      "On an eNB, there can be several PDCP sessions"
    ],
    "explanation": "For a given UE on an eNB: there is only one MAC session (handles all data for that UE), but there can be multiple RLC sessions and multiple PDCP sessions (one per radio bearer/service). Different services or QoS flows require separate RLC and PDCP sessions.",
    "correctAnswer": [0, 3, 5]
  },
  {
    "question": "On the 4G radio interface, data are transmitted",
    "options": [
      "in transport blocks of different sizes but 1-ms duration",
      "in transport blocks of 1500-byte sizes but with variable duration",
      "in transport blocks with variable sizes and durations"
    ],
    "explanation": "In LTE, data is transmitted in transport blocks that have a fixed duration of 1ms (corresponding to one subframe/TTI - Transmission Time Interval), but the size of the transport block varies depending on the modulation scheme, number of allocated resource blocks, and channel conditions.",
    "correctAnswer": [0]
  },
  {
    "question": "To indicate on the radio interface to which UE resource blocks are assigned, the eNB uses",
    "options": [
      "the IMSI of the UE",
      "the RNTI of the UE",
      "the TMSI of the UE",
      "the IP address of the UE"
    ],
    "explanation": "The eNB uses the RNTI (Radio Network Temporary Identifier) to identify UEs on the radio interface. The RNTI is a temporary identifier used for radio resource allocation and scheduling, providing both efficiency and privacy compared to using permanent identifiers like IMSI.",
    "correctAnswer": [1]
  },
  {
    "question": "Let us consider a LTE network in the FDD mode (Frequency Division Duplex) with a 2x5 MHz bandwidth. How many pairs of resource block are there in a 1-ms sub-frame?",
    "options": [
      "6",
      "25",
      "27",
      "50"
    ],
    "explanation": "In LTE FDD with 5 MHz bandwidth, there are 25 resource blocks in the frequency domain. Since FDD uses paired spectrum (uplink and downlink), and each subframe is 1ms, there are 25 pairs of resource blocks available in a 1-ms sub-frame.",
    "correctAnswer": [1]
  },
  {
    "question": "Continuation of the previous question. There are now 10 UEs in the cell that have the same radio conditions (MCS 16 is used). All UEs are treated equally. Compared to the user bit rate found in M3.H.Q11",
    "options": [
      "The user bit rate of each UE is divided by 10",
      "The user bit rate is unchanged",
      "The user bit rate of each UE is multiplied by 10"
    ],
    "explanation": "When 10 UEs share the same resources equally, the available resource blocks must be divided among them. Since each UE gets 1/10th of the resources compared to having the cell to itself, the bit rate for each UE is divided by 10.",
    "correctAnswer": [0]
  },
  {
    "question": "Let us consider the radio interface. When two terminals try to simultaneously access the random access channel (tick several boxes):",
    "options": [
      "The 2 attempts can succeed",
      "One of the attempts can succeed",
      "All the attempts will necessarily fail"
    ],
    "explanation": "In LTE random access, when multiple UEs transmit simultaneously on the random access channel, collisions can occur. Both attempts might succeed if they use different preambles, one might succeed if they use different preambles and the network detects only one, or they might fail if interference is too high. The outcome depends on several factors including preamble selection and signal strength.",
    "correctAnswer": [0, 1]
  },
    {
    "question": "The terminal is still in cell C. Data is to be sent to the terminal. What happens?",
    "options": [
      "A \"UE-triggered service request\" procedure is performed.",
      "A \"Network-triggered service request\" procedure that starts by sending paging messages in cell C is performed.",
      "A \"Network-triggered service request\" procedure that starts by sending paging messages in cells A, B and C is performed.",
      "A \"Network-triggered service request\" procedure that starts by sending paging messages in cells A to E is performed."
    ],
    "explanation": "When the terminal is in ECM-Connected state (still in cell C with an active connection), downlink data can be sent directly to the UE. However, if this question assumes the UE has transitioned to idle mode, the network would page in all cells of the Tracking Areas in the UE's TAI list (cells A, B, and C based on TAI 0 and TAI 1). The correct answer indicates paging in cells A, B, and C.",
    "correctAnswer": [2]
  },
  {
    "question": "The data transmission is finished and the terminal is back in idle mode. The user now moves to cell D (covered by eNB D). What happens?",
    "options": [
      "The terminal listens to the beacon channel of eNB D but does not send any message",
      "The terminal listens to the beacon channel of eNB D, detects that the cell is a new one and triggers a UE service request procedure",
      "The terminal listens to the beacon channel of eNB D, detects that the cell is a new one and triggers a Tracking Area Update request",
      "The MME updates the location of the terminal in its database as soon as the latter is in the new cell."
    ],
    "explanation": "When the UE in idle mode moves to cell D, it reads the beacon channel and detects a new Tracking Area that is not in its TAI list. This triggers a Tracking Area Update (TAU) request to inform the network of its new location, allowing the MME to update its records and send a new TAI list if necessary.",
    "correctAnswer": [2]
  },
],
    module5: [
  {
    "question": "From the packet decoding, select the IP address of the SGW",
    "options": [
      "10.5.1.9",
      "10.5.1.10",
      "10.19.2.19",
      "170.22.0.80"
    ],
    "explanation": "Based on the packet decoding analysis, the SGW (Serving Gateway) IP address is identified as 10.5.1.10. The SGW is a key component in the LTE EPC architecture that routes user data packets between the eNodeB and the PGW.",
    "correctAnswer": [1]
  },
  {
    "question": "From the packet decoding, select the IP address of the PGW",
    "options": [
      "10.5.1.9",
      "10.5.1.10",
      "10.19.2.19",
      "170.22.0.80"
    ],
    "explanation": "Based on the packet decoding analysis, the PGW (PDN Gateway) IP address is identified as 10.5.1.9. The PGW serves as the gateway between the LTE network and external packet data networks (like the Internet).",
    "correctAnswer": [0]
  },
  {
    "question": "From the packet decoding, select the IP address of the UE",
    "options": [
      "10.5.1.9",
      "10.5.1.10",
      "10.19.2.19",
      "170.22.0.80"
    ],
    "explanation": "Based on the packet decoding analysis, the UE (User Equipment) IP address is identified as 170.22.0.80. This is the IP address assigned to the mobile device for communication with external networks.",
    "correctAnswer": [3]
  },
  {
    "question": "What is the address of the visited server",
    "options": [
      "10.5.1.9",
      "10.5.1.10",
      "10.19.2.19",
      "170.22.0.80"
    ],
    "explanation": "Based on the packet decoding analysis, the visited server address is 10.19.2.19. This is the external server that the UE is communicating with through the LTE network.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the TEID used for this tunnel?",
    "options": [
      "0x20912c25",
      "64514",
      "0x03d1"
    ],
    "explanation": "The TEID (Tunnel Endpoint Identifier) used for this GTP tunnel is 0x20912c25. TEIDs are used in GTP (GPRS Tunneling Protocol) to identify different tunnels and ensure packets are delivered to the correct endpoint.",
    "correctAnswer": [0]
  },
  {
    "question": "This TEID has been previously chosen by the",
    "options": [
      "eNodeB",
      "MME",
      "SGW",
      "PGW",
      "UE"
    ],
    "explanation": "The TEID is chosen by the PGW (PDN Gateway). In the GTP tunnel establishment process, each gateway selects the TEID that will be used for incoming traffic on its side of the tunnel.",
    "correctAnswer": [3]
  },
  {
    "question": "Give the IP address of the eNodeB",
    "options": [
      "10.5.1.9",
      "10.5.1.10",
      "10.11.1.137",
      "10.2.11.42",
      "10.19.2.19",
      "170.22.0.80"
    ],
    "explanation": "Based on the network configuration, the eNodeB (evolved NodeB) IP address is 10.2.11.42. The eNodeB is the base station in LTE networks that provides the radio interface to the UE.",
    "correctAnswer": [3]
  },
  {
    "question": "In the following questions, we consider the actions to perform for any packet received depending on the TEID (i.e. the action table). For each packet reaching the SGW with TEID 0x04b18525, to which IP address must we sent the packet?",
    "options": [
      "10.5.1.9",
      "10.5.1.10",
      "10.11.1.137",
      "10.2.11.42",
      "10.19.2.19",
      "170.22.0.80"
    ],
    "explanation": "When the SGW receives a packet with TEID 0x04b18525, it looks up this TEID in its routing table and forwards the packet to the PGW at IP address 10.5.1.9. This is part of the uplink data path from UE to the external network.",
    "correctAnswer": [0]
  },
  {
    "question": "Which TEID do we place in the GTP header of the packet sent by the SGW (i.e. after forwarding)?",
    "options": [
      "0x00000015",
      "0x20912c25",
      "0x04b18505",
      "0x04b18525"
    ],
    "explanation": "After forwarding, the SGW places TEID 0x20912c25 in the GTP header. This is the TEID that was assigned by the PGW for receiving packets on this tunnel, allowing the PGW to identify which UE session the packet belongs to.",
    "correctAnswer": [1]
  },
  {
    "question": "Choose the line which corresponds to another entry in the SGW.",
    "options": [
      "TEID=0x00000015: Action=Fowarding, IP dest=10.2.11.42, TEID=0x04b18505",
      "TEID=0x00000015: Action=Fowarding, IP dest=10.5.1.9, TEID=0x20912c25",
      "TEID=0x00000015: Action=Fowarding, IP dest=10.5.1.10, TEID=0x04b18525",
      "TEID=0x04b18505: Action=Fowarding, IP dest=10.5.1.9, TEID=0x04b18525",
      "TEID=0x04b18505: Action=Fowarding, IP dest=10.5.1.10, TEID=0x04b18525",
      "TEID=0x04b18505: Action=Fowarding, IP dest=10.2.11.42, TEID=0x00000015"
    ],
    "explanation": "The SGW routing table contains bidirectional entries for the GTP tunnels. The entry 'TEID=0x04b18505: Action=Fowarding, IP dest=10.2.11.42, TEID=0x00000015' represents the downlink path, where packets from the PGW (with TEID 0x04b18505) are forwarded to the eNodeB at 10.2.11.42 with TEID 0x00000015.",
    "correctAnswer": [5]
  },
  {
    "question": "We assume TAI 0 and TAI 1 are sent back to the terminal. The user moves to cell B (covered by eNB B). What happens?",
    "options": [
      "The terminal listens to the beacon channel of eNB B but does not send any message,",
      "The terminal listens to the beacon channel of eNB B, detects that the cell is a new one and triggers a UE service request procedure,",
      "The terminal listens to the beacon channel of eNB B, detects that the cell is a new one and triggers a Tracking Area Update request,",
      "The MME updates in its database the location of the terminal as soon as the latter is in the new cell."
    ],
    "explanation": "When a UE in ECM-Connected state moves to a new cell within the same Tracking Area (both TAI 0 and TAI 1 are known to the terminal), it simply listens to the new cell's beacon channel but does not need to send any message to the network. The handover is handled at the lower layers, and since the Tracking Area hasn't changed, no TAU is needed.",
    "correctAnswer": [0]
  },
  {
    "question": "The user now moves to cell C (covered by eNB C). What happens?",
    "options": [
      "The terminal listens to the beacon channel of eNB C but does not send any message",
      "The terminal listens to the beacon channel of eNB C, detects that the cell is a new one and triggers a UE service request procedure",
      "The terminal listens to the beacon channel of eNB C, detects that the cell is a new one and triggers a Tracking Area Update request",
      "The MME updates in its database the location of the terminal as soon as the latter is in the new cell."
    ],
    "explanation": "When the UE moves to cell C in ECM-Connected state, if cell C belongs to a different Tracking Area (not in the TAI list), the terminal listens to the beacon channel, detects it's a new tracking area, but does not initiate a TAU immediately. In ECM-Connected state, the network already knows the UE's location at the cell level, so no TAU is triggered until the UE returns to idle mode.",
    "correctAnswer": [0]
  }
],
    module1: [
  {
    "question": "What is the main architectural difference between 3G and 4G LTE networks?",
    "options": [
      "4G uses circuit-switched architecture while 3G uses packet-switched",
      "4G is a flat, all-IP architecture while 3G has a hierarchical architecture with separate circuit and packet domains",
      "4G uses CDMA while 3G uses OFDMA",
      "4G has more network elements than 3G"
    ],
    "explanation": "LTE introduces a simplified, flat, all-IP architecture. Unlike 3G which had separate domains for circuit-switched (voice) and packet-switched (data) services, LTE is purely packet-based, eliminating elements like RNC and SGSN, resulting in lower latency and higher efficiency.",
    "correctAnswer": [1]
  },
  {
    "question": "In the LTE protocol stack, what is the primary function of the PDCP (Packet Data Convergence Protocol) layer?",
    "options": [
      "Resource allocation and scheduling",
      "IP header compression, encryption, and integrity protection",
      "Segmentation and reassembly of data packets",
      "Physical layer modulation"
    ],
    "explanation": "PDCP performs header compression (ROHC), ciphering (encryption) of user and control plane data, and integrity protection for control plane. It sits above RLC and ensures efficient and secure transmission of IP packets.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the main function of the RLC (Radio Link Control) layer in LTE?",
    "options": [
      "Radio resource allocation",
      "Segmentation, ARQ (Automatic Repeat Request), and reordering",
      "Encryption and decryption",
      "Frequency allocation"
    ],
    "explanation": "RLC performs segmentation/concatenation of PDCP PDUs, provides ARQ for error correction (in AM mode), and handles reordering of received packets. It has three modes: Transparent Mode (TM), Unacknowledged Mode (UM), and Acknowledged Mode (AM).",
    "correctAnswer": [1]
  },
  {
    "question": "During the LTE attach procedure, which entity assigns the IP address to the UE?",
    "options": [
      "eNodeB",
      "MME",
      "SGW",
      "PGW"
    ],
    "explanation": "The PGW (PDN Gateway) assigns the IP address to the UE during the attach procedure. The PGW acts as the gateway to external packet data networks and manages IP address allocation, often interfacing with external DHCP servers or address pools.",
    "correctAnswer": [3]
  },
  {
    "question": "What is the primary advantage of the flat architecture in LTE's Evolved Packet Core (EPC)?",
    "options": [
      "Lower cost of user equipment",
      "Reduced latency and simplified network topology",
      "Support for circuit-switched voice calls",
      "Compatibility with 2G networks"
    ],
    "explanation": "The flat architecture eliminates hierarchical elements like the RNC (Radio Network Controller) from 3G, reducing the number of network nodes that user data must traverse. This significantly reduces latency and simplifies network operations.",
    "correctAnswer": [1]
  },
  {
    "question": "In the LTE protocol stack, what is the primary function of the MAC (Medium Access Control) layer?",
    "options": [
      "Encryption of user data",
      "Multiplexing of logical channels, scheduling, and HARQ",
      "IP header compression",
      "Radio bearer establishment"
    ],
    "explanation": "The MAC layer handles multiplexing of different logical channels onto transport channels, implements the scheduling decisions from the eNodeB, and manages HARQ (Hybrid ARQ) for fast retransmissions at the physical layer.",
    "correctAnswer": [1]
  },
  {
    "question": "What are the two main planes in LTE architecture?",
    "options": [
      "Circuit plane and packet plane",
      "Control plane and user plane",
      "Signaling plane and data plane",
      "Management plane and transport plane"
    ],
    "explanation": "LTE architecture is divided into the Control Plane (C-plane), which handles signaling for connection setup, mobility, and session management, and the User Plane (U-plane), which carries the actual user data. This separation allows for optimized routing and processing.",
    "correctAnswer": [1]
  },
  {
    "question": "During bearer setup in LTE, what is an EPS (Evolved Packet System) bearer?",
    "options": [
      "A physical cable connecting network elements",
      "A logical tunnel that provides specific QoS treatment for data flows",
      "A type of encryption algorithm",
      "A backup server in the core network"
    ],
    "explanation": "An EPS bearer is an end-to-end logical tunnel between the UE and PGW that provides specific QoS treatment. It consists of radio bearers, S1 bearers, and S5/S8 bearers concatenated together, each with associated QoS parameters.",
    "correctAnswer": [1]
  },
  {
    "question": "What information does the eNodeB broadcast on the Physical Broadcast Channel (PBCH)?",
    "options": [
      "User data packets",
      "Master Information Block (MIB) containing essential system information",
      "Paging messages",
      "Handover commands"
    ],
    "explanation": "The PBCH carries the Master Information Block (MIB), which contains essential system information like system bandwidth, system frame number, and PHICH configuration. This allows UEs to initially access and synchronize with the cell.",
    "correctAnswer": [1]
  },
  {
    "question": "How does LTE achieve improved spectral efficiency compared to 3G?",
    "options": [
      "By using higher frequency bands only",
      "By using OFDMA in downlink and SC-FDMA in uplink with advanced antenna techniques",
      "By reducing the number of users per cell",
      "By increasing transmission power"
    ],
    "explanation": "LTE achieves superior spectral efficiency through multiple technologies: OFDMA (downlink) and SC-FDMA (uplink) for efficient spectrum use, MIMO (Multiple Input Multiple Output) for spatial multiplexing, and advanced modulation schemes (up to 64-QAM or 256-QAM).",
    "correctAnswer": [1]
  },
  {
    "question": "What is the purpose of the S1-MME interface in LTE?",
    "options": [
      "To carry user data between eNodeB and SGW",
      "To carry control signaling between eNodeB and MME",
      "To connect two eNodeBs directly",
      "To connect PGW to external networks"
    ],
    "explanation": "The S1-MME interface carries control plane signaling between the eNodeB and MME using the S1-AP protocol over SCTP. It handles procedures like UE context setup, paging, handovers, and other mobility management functions.",
    "correctAnswer": [1]
  },
  {
    "question": "During an intra-LTE handover, what is the main purpose of data forwarding?",
    "options": [
      "To encrypt data during transmission",
      "To minimize packet loss during the transition between eNodeBs",
      "To compress data for efficient transmission",
      "To authenticate the user"
    ],
    "explanation": "Data forwarding from the source to target eNodeB (via X2 or through the SGW) ensures that downlink packets arriving during the handover are not lost. This maintains service continuity and improves user experience during mobility.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the relationship between radio bearers and EPS bearers?",
    "options": [
      "They are completely independent concepts",
      "A radio bearer is the portion of an EPS bearer between UE and eNodeB",
      "An EPS bearer is smaller than a radio bearer",
      "Radio bearers only exist in 3G networks"
    ],
    "explanation": "An EPS bearer is the complete end-to-end tunnel from UE to PGW. The radio bearer is the segment of this EPS bearer between the UE and eNodeB, carrying data over the radio interface. Multiple radio bearers can exist for different services with different QoS requirements.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the role of the PHY (Physical) layer in LTE?",
    "options": [
      "To manage IP addresses",
      "To perform modulation, coding, and transmission/reception of radio signals",
      "To handle mobility management",
      "To compress packet headers"
    ],
    "explanation": "The Physical layer handles the actual transmission and reception of radio signals. It performs channel coding, modulation (QPSK, 16-QAM, 64-QAM), MIMO processing, OFDM signal generation/reception, and maps data to physical resource blocks.",
    "correctAnswer": [1]
  },
  {
    "question": "In LTE, what enables seamless mobility across cells?",
    "options": [
      "Frequent IP address changes",
      "Handover procedures that maintain bearer continuity and preserve IP address",
      "Requiring users to manually reconnect",
      "Using only one large cell"
    ],
    "explanation": "LTE enables seamless mobility through sophisticated handover procedures (X2-based or S1-based) that maintain EPS bearer continuity, preserve the UE's IP address, and minimize service interruption. The flat architecture and efficient signaling contribute to fast handover execution times.",
    "correctAnswer": [1]
  }
],
    module7: [
   
  
  {
    "question": "The first 3G service was launched by:",
    "options": ["Verizon", "NTT DoCoMo", "Airtel", "AT&T"],
    "explanation": "NTT DoCoMo launched the world’s first 3G service in Japan, pioneering high-speed mobile internet.",
    "correctAnswer": [1]
  },
  {
    "question": "The 3G system’s data rate was up to:",
    "options": ["128 kbps", "2 Mbps", "20 Mbps", "1 Gbps"],
    "explanation": "3G systems offered up to 2 Mbps for stationary users and lower rates for mobility.",
    "correctAnswer": [1]
  },
  {
    "question": "The main reason to move from 3G to 4G was:",
    "options": ["Need for faster, lower-latency networks", "Increase in text messages", "Lower voice demand", "Reduce cost of towers"],
    "explanation": "4G addressed the demand for higher data rates and lower latency for modern multimedia applications.",
    "correctAnswer": [0]
  },
  {
    "question": "The global 4G technology standard is:",
    "options": ["GSM", "LTE", "CDMA", "Wi-Fi"],
    "explanation": "LTE (Long Term Evolution) became the standard for 4G globally.",
    "correctAnswer": [1]
  },
  {
    "question": "4G networks are:",
    "options": ["Circuit-switched", "Fully IP-based", "Hybrid", "Analog"],
    "explanation": "4G networks are fully IP-based, enabling data and voice to run over packet-switched networks.",
    "correctAnswer": [1]
  },
  {
    "question": "LTE network mainly consists of:",
    "options": ["NodeB, MSC, SGSN", "UE, eNodeB, EPC", "BTS, RNC, MSC", "IMS, PCRF, P-CSCF"],
    "explanation": "The LTE system consists of UE (User Equipment), eNodeB, and EPC (Evolved Packet Core).",
    "correctAnswer": [1]
  },
  {
    "question": "eNodeB is responsible for:",
    "options": ["Core routing", "Radio communication and control", "Internet gateway", "Billing"],
    "explanation": "eNodeB handles radio communication, scheduling, and control with the UE.",
    "correctAnswer": [1]
  },
  {
    "question": "The EPC represents:",
    "options": ["Evolved Packet Core", "Enhanced Protocol Channel", "Encrypted Packet Cell", "Ethernet Path Connection"],
    "explanation": "EPC stands for Evolved Packet Core, which handles user data and control signaling in LTE.",
    "correctAnswer": [0]
  },
  {
    "question": "LTE uses:",
    "options": ["OFDMA and MIMO", "CDMA", "TDMA", "GSM"],
    "explanation": "LTE employs OFDMA in the downlink and MIMO for improving throughput and spectral efficiency.",
    "correctAnswer": [0]
  },
  {
    "question": "The eNodeB connects to EPC using which interface?",
    "options": ["X2", "S1", "Uu", "Gm"],
    "explanation": "The S1 interface connects eNodeB with the EPC components (MME and SGW).",
    "correctAnswer": [1]
  },
  {
    "question": "MME handles:",
    "options": ["User data forwarding", "Mobility and authentication", "Charging", "Radio scheduling"],
    "explanation": "The Mobility Management Entity (MME) is responsible for authentication, mobility, and session management.",
    "correctAnswer": [1]
  },
  {
    "question": "SGW acts as:",
    "options": ["Bridge between eNodeB and PGW", "Database", "Gateway to IMS", "Security center"],
    "explanation": "The Serving Gateway (SGW) bridges the radio access network (eNodeB) and the core network (PGW).",
    "correctAnswer": [0]
  },
  {
    "question": "PGW assigns:",
    "options": ["Bearer ID", "IP address to the UE", "Handover command", "Session key"],
    "explanation": "The Packet Data Network Gateway (PGW) provides IP address allocation and connectivity to external networks.",
    "correctAnswer": [1]
  },
  {
    "question": "HSS stores:",
    "options": ["App data", "SIM and subscriber info", "Routing tables", "Bearer parameters"],
    "explanation": "The Home Subscriber Server (HSS) stores SIM-related data and authentication information.",
    "correctAnswer": [1]
  },
  {
    "question": "PCRF manages:",
    "options": ["Power saving", "QoS and data policies", "Transmission speed", "Modulation"],
    "explanation": "PCRF (Policy and Charging Rules Function) controls QoS and charging policies for data services.",
    "correctAnswer": [1]
  },
  {
    "question": "eNodeB combines the function of:",
    "options": ["RNC and MSC", "NodeB and RNC", "HSS and PGW", "MME and SGW"],
    "explanation": "In LTE, eNodeB combines the roles of the NodeB and RNC from 3G systems.",
    "correctAnswer": [1]
  },
  {
    "question": "Handover ensures:",
    "options": ["Battery saving", "Seamless connection during movement", "SIM update", "IP reallocation"],
    "explanation": "Handover enables users to maintain ongoing sessions while moving between cells.",
    "correctAnswer": [1]
  },
  {
    "question": "Intra-RAT handover means:",
    "options": ["LTE → 3G", "LTE → LTE", "LTE → Wi-Fi", "3G → 2G"],
    "explanation": "Intra-RAT refers to handover within the same Radio Access Technology, e.g., LTE to LTE.",
    "correctAnswer": [1]
  },
  {
    "question": "Inter-RAT handover occurs between:",
    "options": ["Same networks", "Different technologies (e.g., LTE → 3G)", "Different frequencies only", "Different SIMs"],
    "explanation": "Inter-RAT handover happens between different RATs such as LTE and 3G.",
    "correctAnswer": [1]
  },
  {
    "question": "X2 interface connects:",
    "options": ["MME ↔ HSS", "eNodeB ↔ eNodeB", "SGW ↔ PGW", "UE ↔ MME"],
    "explanation": "The X2 interface connects eNodeBs directly for coordination during handovers.",
    "correctAnswer": [1]
  },
  {
    "question": "The Attach procedure starts when:",
    "options": ["UE sends Attach Request", "MME authenticates UE", "SGW allocates IP", "PCRF checks policy"],
    "explanation": "The Attach process begins when the UE sends an Attach Request to the MME.",
    "correctAnswer": [0]
  },
  {
    "question": "Authentication ensures:",
    "options": ["SIM balance check", "Genuine user identity", "Speed increase", "VoLTE setup"],
    "explanation": "Authentication verifies the legitimacy of the subscriber and device.",
    "correctAnswer": [1]
  },
  {
    "question": "Authentication uses:",
    "options": ["AES or SNOW 3G", "MD5", "DES", "Diffie–Hellman"],
    "explanation": "LTE authentication algorithms include AES and SNOW 3G for security.",
    "correctAnswer": [0]
  },
  {
    "question": "MME gets authentication keys from:",
    "options": ["eNodeB", "HSS", "PGW", "PCRF"],
    "explanation": "The MME retrieves authentication vectors from the HSS for UE verification.",
    "correctAnswer": [1]
  },
  {
    "question": "After attach, UE receives:",
    "options": ["IMSI only", "IP and default bearer", "Temporary ID only", "Routing info"],
    "explanation": "After a successful attach, the UE gets an IP address and a default bearer established.",
    "correctAnswer": [1]
  },
  {
    "question": "A bearer is:",
    "options": ["A type of UE", "Logical data path with QoS", "Encryption channel", "Authentication signal"],
    "explanation": "A bearer defines the logical data path with specific QoS between UE and the network.",
    "correctAnswer": [1]
  },
  {
    "question": "Default bearer provides:",
    "options": ["Voice-only", "Basic IP connectivity", "SMS", "Billing"],
    "explanation": "The default bearer offers basic IP connectivity upon network attach.",
    "correctAnswer": [1]
  },
  {
    "question": "Dedicated bearer is for:",
    "options": ["Background sync", "VoIP or video", "System update", "Handover"],
    "explanation": "Dedicated bearers are established for applications requiring specific QoS like VoIP or video.",
    "correctAnswer": [1]
  },
  {
    "question": "IP address is assigned during:",
    "options": ["Bearer modification", "Attach procedure", "Paging", "Idle mode"],
    "explanation": "The IP address is assigned during the Attach procedure via PGW.",
    "correctAnswer": [1]
  },
  {
    "question": "The PGW connects LTE to:",
    "options": ["eNodeB", "Internet", "HSS", "SGW"],
    "explanation": "PGW provides connectivity from LTE core to external packet data networks such as the Internet.",
    "correctAnswer": [1]
  },
  {
    "question": "PDCP handles:",
    "options": ["Encryption and header compression", "Scheduling", "IP assignment", "Modulation"],
    "explanation": "PDCP manages header compression and data encryption for efficient transmission.",
    "correctAnswer": [0]
  },
  {
    "question": "RLC provides:",
    "options": ["Error correction and segmentation", "Encryption", "Authentication", "Addressing"],
    "explanation": "RLC ensures reliable transmission through segmentation and error correction mechanisms.",
    "correctAnswer": [0]
  },
  {
    "question": "MAC layer is responsible for:",
    "options": ["HARQ and multiplexing", "IP routing", "Frequency tuning", "Bearer control"],
    "explanation": "MAC layer manages multiplexing, scheduling, and HARQ retransmissions.",
    "correctAnswer": [0]
  },
  {
    "question": "PHY layer performs:",
    "options": ["Encryption", "Modulation and coding", "Scheduling", "Authentication"],
    "explanation": "The physical (PHY) layer handles modulation, coding, and radio transmission.",
    "correctAnswer": [1]
  },
  {
    "question": "HARQ is used in which layer?",
    "options": ["PDCP", "MAC", "RLC", "PHY"],
    "explanation": "HARQ (Hybrid ARQ) operates in the MAC layer for retransmission control.",
    "correctAnswer": [1]
  },
  {
    "question": "Control plane carries:",
    "options": ["User data", "Signaling", "Multimedia", "Audio"],
    "explanation": "The Control Plane is responsible for signaling and connection management.",
    "correctAnswer": [1]
  },
  {
    "question": "User plane carries:",
    "options": ["Control info", "Actual data", "Paging", "Authentication keys"],
    "explanation": "The User Plane transmits actual user traffic data packets.",
    "correctAnswer": [1]
  },
  {
    "question": "MME operates in:",
    "options": ["User Plane", "Control Plane", "Transport Plane", "Application Plane"],
    "explanation": "MME is a Control Plane entity that handles signaling and mobility management.",
    "correctAnswer": [1]
  },
  {
    "question": "SGW and PGW mainly handle:",
    "options": ["Control signaling", "User data", "Authentication", "Handover"],
    "explanation": "Serving Gateway and Packet Gateway manage user plane data forwarding.",
    "correctAnswer": [1]
  },
  {
    "question": "Control plane messages are protected using:",
    "options": ["Encryption only", "Integrity + Encryption", "No security", "Hashing only"],
    "explanation": "Control plane signaling uses both encryption and integrity protection for security.",
    "correctAnswer": [1]
  },
  {
    "question": "Which component of LTE manages IP address allocation and session setup?",
    "options": ["MME", "PGW", "SGW", "PCRF"],
    "explanation": "PGW is responsible for IP address management and session setup toward external networks.",
    "correctAnswer": [1]
  },
  {
    "question": "The EPC component responsible for handover control and authentication is:",
    "options": ["SGW", "MME", "eNodeB", "PDCP"],
    "explanation": "MME handles authentication and coordinates handovers.",
    "correctAnswer": [1]
  },
  {
    "question": "Which LTE interface connects the eNodeB directly to the EPC?",
    "options": ["X2", "S1", "Uu", "Gn"],
    "explanation": "S1 is the standard interface linking eNodeB with EPC.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the purpose of the Evolved Packet Core (EPC)?",
    "options": ["To convert analog signals", "To manage control and user planes", "To handle SMS traffic", "To store SIM data"],
    "explanation": "The EPC manages the Control Plane and User Plane in LTE architecture.",
    "correctAnswer": [1]
  },
  {
    "question": "The main function of the PDCP layer is to:",
    "options": ["Perform modulation and demodulation", "Handle encryption and header compression", "Schedule radio resources", "Assign IP addresses"],
    "explanation": "PDCP is responsible for encryption, integrity protection, and header compression.",
    "correctAnswer": [1]
  },
  {
    "question": "PDCP operates between which two layers?",
    "options": ["RLC and MAC", "IP and RLC", "MAC and PHY", "NAS and IP"],
    "explanation": "PDCP resides between IP and RLC layers in the LTE protocol stack.",
    "correctAnswer": [1]
  },
  {
    "question": "Which LTE layer ensures in-order delivery and duplicate detection?",
    "options": ["RLC", "MAC", "PDCP", "PHY"],
    "explanation": "RLC ensures in-order delivery and duplicate detection of data PDUs.",
    "correctAnswer": [0]
  },
  {
    "question": "RLC in Acknowledged Mode (AM) performs:",
    "options": ["Segmentation only", "Error correction using ACK/NACK", "Scheduling", "IP forwarding"],
    "explanation": "RLC-AM uses acknowledgment (ACK/NACK) for reliable delivery and retransmission.",
    "correctAnswer": [1]
  },
  {
    "question": "The MAC layer operates directly above:",
    "options": ["PHY", "PDCP", "IP", "RRC"],
    "explanation": "MAC is positioned directly above the physical (PHY) layer in LTE.",
    "correctAnswer": [0]
  },
  {
    "question": "The RLC layer is part of which OSI layer?",
    "options": ["Network", "Data Link", "Physical", "Transport"],
    "explanation": "RLC operates in the Data Link layer of the OSI model.",
    "correctAnswer": [1]
  },
  {
    "question": "The MAC layer performs HARQ to:",
    "options": ["Provide security", "Enable fast retransmission and error recovery", "Authenticate the user", "Allocate IP addresses"],
    "explanation": "HARQ in MAC enables quick retransmissions for error recovery.",
    "correctAnswer": [1]
  },
  {
    "question": "In LTE, resource allocation and scheduling are managed by:",
    "options": ["UE", "MME", "eNodeB", "SGW"],
    "explanation": "eNodeB manages radio resource scheduling and allocation to UEs.",
    "correctAnswer": [2]
  },
  {
    "question": "The PHY layer handles:",
    "options": ["IP routing", "Radio wave transmission", "QoS enforcement", "Handover logic"],
    "explanation": "The PHY layer transmits and receives data over the air interface using radio waves.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following ensures efficient radio resource usage in LTE?",
    "options": ["MAC", "RLC", "PDCP", "PHY"],
    "explanation": "The MAC layer optimizes resource utilization through scheduling and multiplexing.",
    "correctAnswer": [0]
  },
  {
    "question": "The Control Plane in LTE carries:",
    "options": ["User IP data", "Signaling messages", "Multimedia traffic", "ARQ packets"],
    "explanation": "The Control Plane transmits signaling information for mobility and session control.",
    "correctAnswer": [1]
  },
  {
    "question": "The User Plane in LTE handles:",
    "options": ["Paging", "Authentication", "User data traffic", "RRC control"],
    "explanation": "The User Plane is dedicated to carrying actual user IP data traffic.",
    "correctAnswer": [2]
  },
  {
    "question": "Control Plane messages are mainly handled by:",
    "options": ["MME", "SGW", "PGW", "PDCP"],
    "explanation": "MME processes Control Plane signaling like attach, authentication, and mobility.",
    "correctAnswer": [0]
  },
  {
    "question": "The User Plane data is primarily processed by:",
    "options": ["MME", "SGW and PGW", "HSS", "PCRF"],
    "explanation": "User data in LTE is handled by the SGW and PGW entities.",
    "correctAnswer": [1]
  },

 {
  "question": "The PDCP layer supports mobility through:",
  "options": ["HARQ", "Header compression", "Sequence numbering and reordering", "Modulation"],
  "explanation": "The PDCP (Packet Data Convergence Protocol) layer ensures mobility by maintaining data continuity during handovers using sequence numbering and reordering of packets. This prevents data loss and ensures proper in-sequence delivery when the UE moves between cells.",
  "correctAnswer": [2]
},

{
  "question": "The main reason for using a flat architecture in LTE is:",
  "options": ["Increase latency", "Simplify design and reduce delay", "Reduce bandwidth", "Support more circuit-switched connections"],
  "explanation": "LTE uses a flat network architecture to minimize the number of intermediate nodes between the user and the core network. This simplification reduces signaling overhead and latency, resulting in faster data transfer and improved efficiency.",
  "correctAnswer": [1]
}

  
    ],
    assignment: [

      {
"question": "In 3G, which technology was used mainly in Europe and Asia under UMTS?",
"options": ["CDMA2000", "LTE", "WCDMA", "WiMAX"],
"explanation": "WCDMA (Wideband Code Division Multiple Access) was adopted as the radio access technology for UMTS networks, especially in Europe and Asia.",
"correctAnswer": [2]
},
{
"question": "Typical latency of a 3G network is:",
"options": ["Less than 20 ms", "100–500 ms", "10–50 ms", "More than 1 second"],
"explanation": "3G networks have high latency compared to 4G, typically ranging from 100 ms to 500 ms.",
"correctAnswer": [1]
},
{
"question": "Main limitation of 3G networks compared to 4G:",
"options": ["Lack of multimedia support", "Low speed and high latency", "Absence of packet switching", "Incompatibility with smartphones"],
"explanation": "3G networks offered slower data rates and higher latency than 4G, making them less suitable for modern multimedia applications.",
"correctAnswer": [1]
},
{
"question": "4G was introduced to:",
"options": ["Support voice-only communication", "Provide higher data rates and low latency", "Replace Wi-Fi", "Eliminate IP networks"],
"explanation": "4G’s primary goal was to achieve faster data speeds and lower latency using an all-IP architecture.",
"correctAnswer": [1]
},
{
"question": "Dominant 4G technology worldwide:",
"options": ["WiMAX", "LTE", "GSM", "EDGE"],
"explanation": "LTE (Long Term Evolution) became the most widely adopted 4G technology globally.",
"correctAnswer": [1]
},
{
"question": "OFDMA in LTE is used for:",
"options": ["Error correction", "Channel coding", "Efficient use of spectrum", "Multiplexing users in time domain"],
"explanation": "OFDMA (Orthogonal Frequency Division Multiple Access) divides the spectrum efficiently among multiple users by assigning subcarriers.",
"correctAnswer": [2]
},
{
"question": "Technology that uses multiple antennas to improve capacity:",
"options": ["IMS", "OFDMA", "MIMO", "EPC"],
"explanation": "MIMO (Multiple Input Multiple Output) increases throughput and reliability by using multiple transmit and receive antennas.",
"correctAnswer": [2]
},
{
"question": "The Evolved Packet Core (EPC) handles:",
"options": ["Only user plane", "Both control and user planes", "Only signaling", "Only IP address assignment"],
"explanation": "EPC supports both control and user planes, enabling data transfer and signaling in LTE networks.",
"correctAnswer": [1]
},
{
"question": "eNodeB in LTE replaces:",
"options": ["NodeB only", "RNC only", "Both NodeB and RNC", "SGW and PGW"],
"explanation": "eNodeB integrates the functions of NodeB and RNC, simplifying LTE’s flat architecture.",
"correctAnswer": [2]
},
{
"question": "In LTE, IP address is assigned by:",
"options": ["MME", "HSS", "PGW", "eNodeB"],
"explanation": "The Packet Gateway (PGW) allocates the IP address to user equipment during attach.",
"correctAnswer": [2]
},
{
"question": "Intra-RAT handover occurs between:",
"options": ["LTE and 3G", "LTE and WiMAX", "LTE to LTE", "LTE to GSM"],
"explanation": "Intra-RAT handover happens within the same radio access technology, such as LTE-to-LTE.",
"correctAnswer": [2]
},
{
"question": "Interface used for handover signaling between eNodeBs:",
"options": ["S1", "X2", "Uu", "Gn"],
"explanation": "The X2 interface connects eNodeBs and carries signaling during handover within LTE.",
"correctAnswer": [1]
},
{
"question": "Purpose of Attach Procedure in LTE:",
"options": ["Disconnect a device", "Register UE with the network", "Restart base station", "Allocate bearer to MME only"],
"explanation": "The Attach Procedure allows a UE to register and connect with the LTE network for service.",
"correctAnswer": [1]
},
{
"question": "Default bearer in LTE provides:",
"options": ["Dedicated high QoS", "Always-on IP connectivity", "Temporary data connection", "Non-IP signaling"],
"explanation": "The default bearer gives continuous, always-on IP connectivity to the UE after attach.",
"correctAnswer": [1]
},
{
"question": "Protocol layer responsible for header compression and security:",
"options": ["MAC", "PDCP", "RLC", "PHY"],
"explanation": "The PDCP layer performs header compression, ciphering, and integrity protection.",
"correctAnswer": [1]
},
{
"question": "RLC layer mainly ensures:",
"options": ["Data integrity and reliability", "Header compression", "Multiplexing", "Resource allocation"],
"explanation": "The RLC (Radio Link Control) layer provides reliable data transfer through segmentation and retransmission.",
"correctAnswer": [0]
},
{
"question": "MAC layer handles:",
"options": ["Scheduling, multiplexing, and error recovery", "Radio signal conversion", "Authentication", "Bearer setup"],
"explanation": "The MAC (Medium Access Control) layer manages resource scheduling, multiplexing, and retransmissions.",
"correctAnswer": [0]
},
{
"question": "Lowest layer in LTE protocol stack:",
"options": ["PDCP", "MAC", "RLC", "PHY"],
"explanation": "The Physical (PHY) layer is the lowest layer, responsible for radio transmission and reception.",
"correctAnswer": [3]
},
{
"question": "Control Plane in LTE carries:",
"options": ["User data", "Signaling messages", "Multimedia traffic", "Error correction codes"],
"explanation": "The Control Plane handles signaling information between UE and the network.",
"correctAnswer": [1]
},
{
"question": "User Plane in LTE carries:",
"options": ["Authentication messages", "Handover signaling", "Voice, video, and internet traffic", "Control signaling"],
"explanation": "The User Plane transports actual user data such as voice, video, and internet packets.",
"correctAnswer": [2]
},
{
"question": "Latency of 4G is approximately:",
"options": ["100–200 ms", "Less than 50 ms", "1–2 seconds", "75–150 ms"],
"explanation": "4G networks achieve very low latency, typically below 50 ms.",
"correctAnswer": [1]
},
{
"question": "Speed of 4G in mobile environment:",
"options": ["Up to 2 Mbps", "Up to 10 Mbps", "Up to 100 Mbps", "Up to 1 Gbps"],
"explanation": "In mobile scenarios, 4G offers speeds up to about 100 Mbps.",
"correctAnswer": [2]
},
{
"question": "Speed of 4G in stationary environment:",
"options": ["Up to 10 Mbps", "Up to 100 Mbps", "Up to 1 Gbps", "Up to 5 Gbps"],
"explanation": "Under stationary or low-mobility conditions, 4G can reach speeds up to 1 Gbps.",
"correctAnswer": [2]
},
{
"question": "Network type used in 4G:",
"options": ["Hybrid (Circuit + Packet)", "Circuit-switched", "All-IP", "Non-IP"],
"explanation": "4G networks are all-IP, meaning all communications—voice and data—use Internet Protocol.",
"correctAnswer": [2]
},
{
"question": "Bearer responsible for special QoS like VoIP:",
"options": ["Default bearer", "Dedicated bearer", "Dynamic bearer", "Static bearer"],
"explanation": "A dedicated bearer is established to provide specific QoS parameters for services such as VoIP.",
"correctAnswer": [1]
}
,
{
"question": "Bearer created automatically during attach procedure:",
"options": ["Default bearer", "Dedicated bearer", "Temporary bearer", "Control bearer"],
"explanation": "The default bearer is automatically created during the attach procedure to provide basic IP connectivity.",
"correctAnswer": [0]
},
{
"question": "Layer managing ciphering and integrity protection:",
"options": ["MAC", "PDCP", "PHY", "RLC"],
"explanation": "PDCP layer provides ciphering and integrity protection for both control and user plane data.",
"correctAnswer": [1]
},
{
"question": "Which entity authenticates and manages mobility?",
"options": ["eNodeB", "MME", "PGW", "SGW"],
"explanation": "The MME (Mobility Management Entity) handles user authentication and mobility management in LTE.",
"correctAnswer": [1]
},
{
"question": "Dynamic IP in LTE is:",
"options": ["Assigned permanently", "Assigned per session", "Static allocation", "Shared between users"],
"explanation": "Dynamic IP addresses are allocated per session and released after disconnection.",
"correctAnswer": [1]
},
{
"question": "Static IP in LTE is:",
"options": ["For normal users", "For special users", "Randomly assigned", "Deprecated"],
"explanation": "Static IP addresses are reserved for special users or enterprise applications requiring fixed IPs.",
"correctAnswer": [1]
},
{
"question": "Inter-RAT handover occurs between:",
"options": ["LTE to LTE", "LTE to 3G or GSM", "UMTS to UMTS", "LTE cells under same eNodeB"],
"explanation": "Inter-RAT handover happens when switching between different radio access technologies such as LTE and 3G.",
"correctAnswer": [1]
},
{
"question": "Main controller for inter-RAT handover:",
"options": ["SGW", "eNodeB", "MME", "PGW"],
"explanation": "MME coordinates inter-RAT handovers by managing signaling and mobility between different technologies.",
"correctAnswer": [2]
},
{
"question": "Interface used between UE and eNodeB:",
"options": ["Uu interface", "X2 interface", "S1 interface", "Gn interface"],
"explanation": "The Uu interface connects the user equipment (UE) to the eNodeB over the air interface.",
"correctAnswer": [0]
},
{
"question": "Purpose of EPC:",
"options": ["Manages routing only", "Provides IP connectivity, mobility, and QoS", "Handles only voice traffic", "Encrypts user data"],
"explanation": "The Evolved Packet Core (EPC) provides IP connectivity, manages mobility, and ensures QoS in LTE.",
"correctAnswer": [1]
},
{
"question": "Primary role of MAC scheduler:",
"options": ["Security", "Resource allocation per TTI", "Authentication", "Modulation"],
"explanation": "The MAC scheduler allocates radio resources per Transmission Time Interval (TTI) based on QoS and priority.",
"correctAnswer": [1]
},
{
"question": "PDCP ensures:",
"options": ["Random transmission", "In-order delivery and duplicate detection", "Error coding", "Frame synchronization"],
"explanation": "The PDCP layer ensures in-order delivery, removes duplicates, and handles header compression.",
"correctAnswer": [1]
},
{
"question": "Physical layer converts:",
"options": ["Packets into frames", "Bits into radio waves", "Bytes into symbols", "IP into MAC"],
"explanation": "The Physical (PHY) layer modulates digital bits into radio waves for wireless transmission.",
"correctAnswer": [1]
},
{
"question": "Core function of LTE architecture:",
"options": ["High latency and low throughput", "Low latency and high throughput", "Only voice communication", "Pure circuit switching"],
"explanation": "LTE was designed for low latency and high throughput using an all-IP flat architecture.",
"correctAnswer": [1]
},
{
"question": "Control Plane is handled by:",
"options": ["PGW", "SGW", "MME", "eNodeB only"],
"explanation": "MME manages the Control Plane functions like authentication and signaling.",
"correctAnswer": [2]
},
{
"question": "User Plane is handled by:",
"options": ["MME", "SGW and PGW", "eNodeB", "HSS"],
"explanation": "The Serving Gateway and Packet Gateway manage user plane data transfer in LTE.",
"correctAnswer": [1]
},
{
"question": "Which of the following is a 3G standard used primarily in North America?",
"options": ["WCDMA", "GSM", "CDMA2000", "LTE"],
"explanation": "CDMA2000 was the dominant 3G technology in North America, while WCDMA was used in Europe and Asia.",
"correctAnswer": [2]
},
{
"question": "What is the maximum practical speed of 3G networks?",
"options": ["10 Mbps", "2 Mbps", "100 Mbps", "1 Gbps"],
"explanation": "3G networks typically achieve a maximum of around 2 Mbps in practical scenarios.",
"correctAnswer": [1]
},
{
"question": "Which network element controlled both circuit-switched and packet-switched traffic in 3G?",
"options": ["eNodeB", "RNC", "MME", "PGW"],
"explanation": "The Radio Network Controller (RNC) managed both circuit-switched and packet-switched traffic in 3G.",
"correctAnswer": [1]
},
{
"question": "Which was a key motivation for moving from 3G to 4G?",
"options": ["Increase in call drops", "Need for higher data rates and all-IP networks", "Decline in smartphone usage", "Elimination of mobile internet"],
"explanation": "The shift to 4G was driven by the need for higher data rates and an all-IP infrastructure for modern multimedia services.",
"correctAnswer": [1]
},
{
"question": "LTE stands for:",
"options": ["Long Term Evolution", "Linear Transmission Exchange", "Local Telecommunication Extension", "Light Transmission Entity"],
"explanation": "LTE stands for Long Term Evolution, the standard for 4G mobile broadband technology.",
"correctAnswer": [0]
},
{
"question": "Which of the following is not a feature of 4G?",
"options": ["Packet-switched network", "High latency", "High data rate", "IP-based voice (VoLTE)"],
"explanation": "4G features low latency and high data rate, making 'High latency' incorrect.",
"correctAnswer": [1]
},
{
"question": "The latency in 4G networks is typically:",
"options": ["200 ms", "100–500 ms", "<50 ms", ">1 second"],
"explanation": "4G networks have latency less than 50 ms, enabling real-time communication.",
"correctAnswer": [2]
},
{
"question": "LTE’s flat architecture helps to:",
"options": ["Increase latency", "Reduce latency and complexity", "Increase number of nodes", "Decrease scalability"],
"explanation": "Flat architecture reduces the number of intermediate nodes, minimizing latency and simplifying design.",
"correctAnswer": [1]
},
{
"question": "IMS in LTE stands for:",
"options": ["Internet Messaging System", "IP Multimedia Subsystem", "Integrated Mobility System", "Internal Message Setup"],
"explanation": "IMS stands for IP Multimedia Subsystem, which manages IP-based multimedia services like VoLTE.",
"correctAnswer": [1]
},
{
"question": "The main advantage of an all-IP network is:",
"options": ["Supports both voice and data using IP", "Increases circuit switching", "Uses analog transmission", "Eliminates internet access"],
"explanation": "An all-IP network allows unified transport of voice, video, and data using Internet Protocol.",
"correctAnswer": [0]
}
,
{
"question": "The function of MME in LTE is:",
"options": ["Handling radio transmission", "Authentication and mobility management", "IP address allocation", "Packet forwarding"],
"explanation": "The Mobility Management Entity (MME) handles authentication, session management, and mobility in the control plane.",
"correctAnswer": [1]
},
{
"question": "The function of SGW in LTE is:",
"options": ["Route and forward user data packets", "Assign IP addresses", "Authenticate users", "Manage radio channels"],
"explanation": "The Serving Gateway (SGW) routes and forwards user data packets between eNodeB and the Packet Gateway (PGW).",
"correctAnswer": [0]
},
{
"question": "Which of the following is responsible for IP address allocation in LTE?",
"options": ["SGW", "eNodeB", "PGW", "MME"],
"explanation": "The Packet Gateway (PGW) is responsible for allocating IP addresses to user equipment.",
"correctAnswer": [2]
},
{
"question": "When is the IP address allocated to a UE in LTE?",
"options": ["During attach procedure", "During call termination", "After session release", "During paging"],
"explanation": "The IP address is assigned to the UE during the attach procedure via the PGW.",
"correctAnswer": [0]
},
{
"question": "The default bearer is established during:",
"options": ["Detach procedure", "Attach procedure", "Paging procedure", "Inter-RAT handover"],
"explanation": "A default bearer is created during the attach procedure to provide always-on connectivity.",
"correctAnswer": [1]
},
{
"question": "The dedicated bearer is created:",
"options": ["Automatically", "For services needing special QoS", "For every session", "Only for control signaling"],
"explanation": "Dedicated bearers are established for services requiring specific Quality of Service (QoS), such as VoIP.",
"correctAnswer": [1]
},
{
"question": "Which of the following provides always-on IP connectivity?",
"options": ["Dedicated bearer", "Default bearer", "Control bearer", "S1 interface"],
"explanation": "The default bearer provides a permanent IP connection that remains active during user sessions.",
"correctAnswer": [1]
},
{
"question": "Which LTE layer performs ciphering and integrity protection?",
"options": ["RLC", "MAC", "PDCP", "PHY"],
"explanation": "The PDCP layer handles ciphering and integrity protection to ensure data security in LTE.",
"correctAnswer": [2]
},
{
"question": "Which layer in LTE is responsible for error correction and retransmission?",
"options": ["PDCP", "RLC", "MAC", "PHY"],
"explanation": "The Radio Link Control (RLC) layer ensures reliability using ARQ for error correction and retransmission.",
"correctAnswer": [1]
},
{
"question": "Which of the following functions are performed by the MAC layer?",
"options": ["Scheduling and multiplexing", "IP routing", "Header compression", "Authentication"],
"explanation": "The MAC (Medium Access Control) layer performs scheduling, multiplexing, and error recovery.",
"correctAnswer": [0]
},
{
"question": "The Physical layer in LTE:",
"options": ["Handles encryption", "Converts bits to radio signals", "Manages sessions", "Allocates IP addresses"],
"explanation": "The PHY layer converts digital bits into radio signals for wireless transmission and vice versa.",
"correctAnswer": [1]
},
{
"question": "The RLC layer belongs to which OSI layer?",
"options": ["Network Layer", "Data Link Layer", "Physical Layer", "Application Layer"],
"explanation": "RLC is part of the Data Link Layer and provides reliable data transmission over the air interface.",
"correctAnswer": [1]
},
{
"question": "Which of the following ensures QoS (Quality of Service) in LTE?",
"options": ["EPC", "eNodeB", "MME", "RLC"],
"explanation": "The Evolved Packet Core (EPC) manages Quality of Service through bearer establishment and traffic control.",
"correctAnswer": [0]
},
{
"question": "In LTE, handover ensures:",
"options": ["IP allocation", "Seamless transition between cells", "Packet encryption", "Paging procedure"],
"explanation": "Handover allows seamless transition from one cell to another without dropping the ongoing connection.",
"correctAnswer": [1]
},
{
"question": "The Intra-eNodeB handover occurs when:",
"options": ["UE moves between eNodeBs", "UE moves between cells controlled by the same eNodeB", "UE switches to 3G", "UE detaches from the network"],
"explanation": "Intra-eNodeB handover happens when the UE moves between cells under the same eNodeB controller.",
"correctAnswer": [1]
},
{
"question": "The Inter-eNodeB handover is the most common type of:",
"options": ["Intra-RAT handover", "Inter-RAT handover", "EPC handover", "IMS transfer"],
"explanation": "Inter-eNodeB handover occurs within the same radio access technology, making it an Intra-RAT handover.",
"correctAnswer": [0]
},
{
"question": "The Control Plane is responsible for:",
"options": ["User data", "Signaling and session management", "Radio transmission", "IP forwarding"],
"explanation": "The Control Plane handles signaling, authentication, and session control between UE and the core network.",
"correctAnswer": [1]
},
{
"question": "The User Plane is handled by:",
"options": ["MME", "SGW and PGW", "eNodeB only", "PDCP layer"],
"explanation": "User Plane traffic is handled by the Serving Gateway (SGW) and Packet Gateway (PGW).",
"correctAnswer": [1]
},
{
"question": "The traffic volume in Control Plane is:",
"options": ["Very high", "Low", "Moderate", "Variable"],
"explanation": "Control Plane traffic is low because it carries signaling data, not user payload.",
"correctAnswer": [1]
},
{
"question": "The traffic volume in User Plane is:",
"options": ["Low", "High", "Constant", "Negligible"],
"explanation": "User Plane traffic is high since it carries user data such as voice, video, and browsing content.",
"correctAnswer": [1]
},
{
"question": "The X2 interface connects:",
"options": ["eNodeB and MME", "Two eNodeBs", "UE and eNodeB", "PGW and SGW"],
"explanation": "The X2 interface links two eNodeBs and is mainly used for handover signaling.",
"correctAnswer": [1]
},
{
"question": "The S1 interface connects:",
"options": ["eNodeB to EPC", "UE to eNodeB", "MME to HSS", "SGW to PGW"],
"explanation": "The S1 interface connects the eNodeB with the EPC components (MME and SGW).",
"correctAnswer": [0]
},
{
"question": "Which protocol in LTE handles sequence numbering and reordering?",
"options": ["PDCP", "MAC", "RLC", "PHY"],
"explanation": "The PDCP layer ensures sequence numbering, reordering, and in-order delivery of packets.",
"correctAnswer": [0]
},
{
"question": "HARQ is a feature of which layer?",
"options": ["MAC layer", "RLC layer", "PDCP layer", "PHY layer"],
"explanation": "Hybrid Automatic Repeat reQuest (HARQ) is implemented at the MAC layer to enhance reliability.",
"correctAnswer": [0]
},
{
"question": "The Attach Request message is sent by:",
"options": ["MME", "UE", "SGW", "PGW"],
"explanation": "The User Equipment (UE) initiates the attach procedure by sending an Attach Request to the MME.",
"correctAnswer": [1]
}
,
{
"question": "During LTE attach, which entity verifies subscriber identity?",
"options": ["PGW", "HSS", "SGW", "eNodeB"],
"explanation": "The Home Subscriber Server (HSS) verifies the subscriber's identity and provides authentication information to the MME.",
"correctAnswer": [1]
},
{
"question": "The authentication vector is generated by:",
"options": ["MME", "HSS", "eNodeB", "UE"],
"explanation": "The HSS generates authentication vectors used by the MME to authenticate the user equipment.",
"correctAnswer": [1]
},
{
"question": "The PDN Connectivity Procedure is used for:",
"options": ["Establishing IP connectivity with external networks", "Disconnecting UE", "Handling paging", "Handover control"],
"explanation": "The PDN Connectivity Procedure enables the UE to establish IP connectivity with external packet data networks via the PGW.",
"correctAnswer": [0]
},
{
"question": "LTE supports which IP versions?",
"options": ["IPv4 only", "IPv6 only", "Both IPv4 and IPv6", "IPv3"],
"explanation": "LTE supports dual-stack operation, allowing both IPv4 and IPv6 for compatibility and future scalability.",
"correctAnswer": [2]
},
{
"question": "LTE provides VoIP services through:",
"options": ["EPC", "IMS subsystem", "RNC", "WiMAX"],
"explanation": "Voice over LTE (VoLTE) is implemented using the IP Multimedia Subsystem (IMS) framework.",
"correctAnswer": [1]
},
{
"question": "The Attach Request message is sent during which procedure?",
"options": ["Detach Procedure", "Attach Procedure", "Paging Procedure", "Tracking Area Update"],
"explanation": "The Attach Request is the first message sent by the UE during the Attach Procedure to connect to the LTE network.",
"correctAnswer": [1]
},
{
"question": "The Detach Procedure is used to:",
"options": ["Establish a new session", "Deregister UE from the network", "Update frequency band", "Reassign QoS"],
"explanation": "The Detach Procedure allows the UE to deregister and disconnect from the LTE network properly.",
"correctAnswer": [1]
},
{
"question": "Which LTE entity initiates the Detach Accept message?",
"options": ["UE", "MME", "SGW", "PGW"],
"explanation": "The UE sends the Detach Accept message to confirm successful disconnection from the network.",
"correctAnswer": [0]
},
{
"question": "The Attach Reject message is sent when:",
"options": ["Authentication fails", "QoS is insufficient", "Paging is successful", "IP pool is empty"],
"explanation": "If authentication fails or the UE is unauthorized, the MME sends an Attach Reject message.",
"correctAnswer": [0]
},
{
"question": "LTE uses which algorithm for authentication?",
"options": ["AES only", "EPS-AKA (Evolved Packet System AKA)", "RSA", "HMAC-SHA256"],
"explanation": "LTE uses the EPS-AKA algorithm, which is an evolved version of 3G's Authentication and Key Agreement protocol.",
"correctAnswer": [1]
},
{
"question": "In LTE security, ciphering keys are generated from:",
"options": ["Session Manager", "Authentication Vector", "eNodeB", "HSS cache"],
"explanation": "Ciphering and integrity protection keys are derived from the authentication vector obtained from the HSS.",
"correctAnswer": [1]
},
{
"question": "K_ASME key is derived and used by which entity?",
"options": ["PGW", "MME", "SGW", "HSS"],
"explanation": "The MME derives and uses the K_ASME key for further key generation and authentication processes.",
"correctAnswer": [1]
},
{
"question": "Which key is used for signaling message integrity?",
"options": ["K_UPenc", "K_RRCint", "K_eNB", "K_SMC"],
"explanation": "K_RRCint is used to ensure the integrity of signaling messages exchanged between UE and eNodeB.",
"correctAnswer": [1]
},
{
"question": "LTE security modes are activated after:",
"options": ["Attach Accept", "Authentication Completion", "Paging Response", "Handover Request"],
"explanation": "Security modes are activated after authentication is successfully completed between UE and network.",
"correctAnswer": [1]
},
{
"question": "VoLTE (QoS Class Identifier) for real-time voice calls is:",
"options": ["QCI 1", "QCI 3", "QCI 5", "QCI 9"],
"explanation": "QCI 1 is used for real-time conversational voice services like VoLTE with low latency requirements.",
"correctAnswer": [0]
},
{
"question": "The SRVCC (Single Radio Voice Call Continuity) procedure is used for:",
"options": ["Handover between Wi-Fi and LTE", "Maintaining voice call from LTE to 2G/3G", "Changing IP address", "Establishing new default bearer"],
"explanation": "SRVCC enables an ongoing VoLTE call to continue when the user moves from LTE coverage to 2G or 3G networks.",
"correctAnswer": [1]
},
{
"question": "In IMS, SIP stands for:",
"options": ["Secure Internet Protocol", "Session Initiation Protocol", "Signal Integration Path", "Subscriber IP Profile"],
"explanation": "SIP (Session Initiation Protocol) is used in IMS to establish, modify, and terminate multimedia sessions.",
"correctAnswer": [1]
},
{
"question": "PCRF (Policy and Charging Rules Function) is connected to:",
"options": ["PGW", "MME", "HSS", "SGW"],
"explanation": "The PCRF communicates with the Packet Gateway (PGW) to apply policy control and charging rules.",
"correctAnswer": [0]
},
{
"question": "VoLTE uses which protocol for signaling setup?",
"options": ["HTTP", "SIP", "FTP", "DHCP"],
"explanation": "SIP (Session Initiation Protocol) is used for session control and signaling setup in VoLTE.",
"correctAnswer": [1]
},
{
"question": "LTE’s average user throughput is approximately:",
"options": ["1–2 Mbps", "5–12 Mbps for downlink", "50–100 Mbps uplink", "100 Mbps downlink and uplink both"],
"explanation": "The average user throughput in LTE networks is about 5–12 Mbps for downlink, depending on conditions.",
"correctAnswer": [1]
},
{
"question": "The spectrum efficiency of LTE compared to 3G is about:",
"options": ["2× higher", "5× higher", "10× higher", "Same as 3G"],
"explanation": "LTE provides roughly five times better spectrum efficiency than 3G due to advanced modulation and MIMO.",
"correctAnswer": [1]
},
{
"question": "LTE-Advanced can achieve data rates up to:",
"options": ["100 Mbps", "500 Mbps", "1 Gbps", "3 Gbps"],
"explanation": "LTE-Advanced enhances LTE with carrier aggregation and MIMO to achieve data rates up to 1 Gbps.",
"correctAnswer": [2]
},
{
"question": "Carrier aggregation in LTE-A supports a maximum bandwidth of:",
"options": ["20 MHz", "40 MHz", "100 MHz", "200 MHz"],
"explanation": "Carrier aggregation allows combining up to five 20 MHz carriers for a total of 100 MHz bandwidth.",
"correctAnswer": [2]
},
{
"question": "The main goal of LTE architecture simplification was to:",
"options": ["Increase circuit switching", "Reduce latency and improve efficiency", "Support legacy hardware", "Eliminate QoS"],
"explanation": "Simplified LTE architecture reduces latency and improves network efficiency by minimizing intermediate nodes.",
"correctAnswer": [1]
},
{
"question": "The key difference between 3G and 4G is:",
"options": ["3G uses packet-switching only", "4G is fully IP based and packet switched", "3G is faster than 4G", "4G uses circuit-switched core"],
"explanation": "Unlike 3G, 4G is entirely IP-based and relies on packet switching for all services including voice.",
"correctAnswer": [1]
},
      
{
"question": "What is a primary advantage of 4G over 3G?",
"options": [
"Lower data rates",
"Circuit-switched core network",
"Higher spectral efficiency",
"Limited mobility support"
],
"explanation": "4G (LTE) improves spectral efficiency compared to 3G, enabling higher data rates and better use of spectrum. 4G is packet-switched rather than circuit-switched. (Lecture: Evolution from 3G to 4G).",
"correctAnswer": [2]
},
{
"question": "What does eNodeB stand for in LTE?",
"options": [
"Enhanced Node B",
"Electronic Node Base",
"Evolved Network Base",
"Encrypted Node B"
],
"explanation": "eNodeB stands for Enhanced Node B; it is the LTE base station responsible for radio interface functions. (LTE Network Architecture Overview).",
"correctAnswer": [0]
},
{
"question": "The LTE architecture is primarily based on which type of network?",
"options": [
"Circuit-switched",
"Packet-switched",
"Hybrid (circuit + packet)",
"ATM-switched"
],
"explanation": "LTE uses an all-IP packet-switched architecture for both data and voice (when using VoLTE). (LTE Network Architecture Overview).",
"correctAnswer": [1]
},
{
"question": "Which component is part of the LTE core network (EPC)?",
"options": [
"RLC",
"MME",
"UE",
"PHY"
],
"explanation": "MME (Mobility Management Entity) is a core EPC control-plane element. RLC and PHY are radio protocol layers and UE is the user equipment. (Evolved Packet Core lecture).",
"correctAnswer": [1]
},
{
"question": "In LTE, what is the primary purpose of the MME (Mobility Management Entity)?",
"options": [
"To route user data packets between the eNodeB and external networks",
"To handle signaling, authentication, and mobility management",
"To assign radio resources to UEs",
"To provide charging and policy control"
],
"explanation": "The MME handles control-plane functions such as signaling, authentication, tracking-area management and mobility. User-plane routing is done by SGW/PGW. (EPC lecture).",
"correctAnswer": [1]
},
{
"question": "The Serving Gateway (SGW) primarily handles:",
"options": [
"User authentication",
"IP address allocation",
"Routing user data packets",
"Policy enforcement"
],
"explanation": "SGW forwards and routes user-plane packets and acts as the local mobility anchor during handovers; PGW handles IP allocation and policy often involves PCRF. (EPC lecture).",
"correctAnswer": [2]
},
{
"question": "Which EPC component interfaces directly with the internet?",
"options": [
"MME",
"SGW",
"PGW",
"HSS"
],
"explanation": "The PDN Gateway (PGW) interfaces the EPC to external packet data networks (like the internet) and allocates IP addresses for UEs. (EPC lecture).",
"correctAnswer": [2]
},
{
"question": "Which interface/protocol is used between eNodeBs for coordination?",
"options": [
"S1",
"X2",
"GTP-U",
"RTP"
],
"explanation": "The X2 interface connects eNodeBs directly for tasks like handover coordination and load management; S1 connects eNodeB to the core. (eNodeB lecture).",
"correctAnswer": [1]
},
{
"question": "eNodeB connects directly to which of the following?",
"options": [
"PGW",
"MME",
"UE",
"HSS"
],
"explanation": "eNodeB provides the radio interface and connects directly with UEs over the air. It connects to the core network via S1 interfaces. (eNodeB lecture).",
"correctAnswer": [2]
},
{
"question": "Who typically assigns the IP address to a UE in LTE?",
"options": [
"MME",
"SGW",
"PGW",
"eNodeB"
],
"explanation": "The PGW (PDN Gateway) typically allocates the UE's IP address as part of the default bearer setup during attach. (IP Address Allocation lecture).",
"correctAnswer": [2]
},
{
"question": "Which protocol is commonly used for IP allocation in LTE environments?",
"options": [
"FTP",
"DHCP",
"HTTP",
"SNMP"
],
"explanation": "DHCP is commonly used in networks for IP address allocation; PGW may coordinate IP assignment during attach (or use internal mechanisms), and DHCP is widely referenced. (IP Address Allocation lecture).",
"correctAnswer": [1]
},
{
"question": "IP address allocation to a UE typically occurs during which procedure?",
"options": [
"Handover",
"Attach procedure",
"Detach procedure",
"Paging"
],
"explanation": "IP allocation usually happens during the attach procedure (default bearer setup) when the UE registers with the network. (IP Address Allocation lecture).",
"correctAnswer": [1]
},
{
"question": "What is an EPS bearer in LTE?",
"options": [
"A physical device attached to the UE",
"A logical channel for user data with specific QoS",
"A type of SIM card",
"A security algorithm"
],
"explanation": "An EPS bearer is a logical channel between the UE and PDN that carries user data with an associated QoS. (Session Creation and Bearer Setup lecture).",
"correctAnswer": [1]
},
{
"question": "What best describes the difference between a session and a bearer in LTE?",
"options": [
"They are the same thing",
"Session is about user traffic; bearer is the transport path",
"Bearer is about user traffic; session is the transport path",
"Both relate only to voice"
],
"explanation": "A session refers to the end-to-end service/traffic context, while a bearer is the specific transport path in the EPC with QoS parameters. (Session Creation and Bearer Setup lecture).",
"correctAnswer": [1]
},
{
"question": "PDCP sits above which layer in the LTE protocol stack?",
"options": [
"MAC",
"RLC",
"PHY",
"NAS"
],
"explanation": "PDCP is positioned above RLC in the LTE Layer 2 stack; it provides header compression, ciphering and integrity protection. (PDCP lecture).",
"correctAnswer": [1]
},
{
"question": "Which header compression technique is used by PDCP?",
"options": [
"LZW",
"ROHC",
"Huffman",
"GZIP"
],
"explanation": "PDCP uses Robust Header Compression (ROHC) to reduce IP/UDP/RTP header overhead on radio links. (PDCP lecture).",
"correctAnswer": [1]
},
{
"question": "Which of the following is NOT a function of the PDCP layer?",
"options": [
"Header compression",
"Ciphering",
"Scheduling",
"Integrity protection"
],
"explanation": "PDCP handles header compression, ciphering and integrity protection. Scheduling is performed at MAC/RLC layers. (PDCP lecture).",
"correctAnswer": [2]
},
{
"question": "The RLC layer operates in which protocol layer of LTE?",
"options": [
"Layer 1",
"Layer 2",
"Layer 3",
"Layer 4"
],
"explanation": "RLC (Radio Link Control) is part of Layer 2 (the data link layer) and performs segmentation, reassembly and retransmission functions. (RLC lecture).",
"correctAnswer": [1]
},
{
"question": "Which RLC mode supports retransmissions for error correction?",
"options": [
"TM (Transparent Mode)",
"UM (Unacknowledged Mode)",
"AM (Acknowledged Mode)",
"SM (Synchronized Mode)"
],
"explanation": "Acknowledged Mode (AM) provides retransmission and ARQ mechanisms for error correction in RLC. (RLC lecture).",
"correctAnswer": [2]
},
{
"question": "What is the main function of the RLC layer?",
"options": [
"Routing",
"Segmentation and reassembly",
"Encryption",
"Scheduling"
],
"explanation": "RLC is responsible for segmentation of higher-layer PDUs into RLC PDUs and reassembly at the receiver, plus retransmissions in AM. (RLC lecture).",
"correctAnswer": [1]
},
{
"question": "What is the primary responsibility of the MAC layer in LTE?",
"options": [
"IP routing",
"Scheduling and multiplexing",
"Header compression",
"Encryption"
],
"explanation": "MAC performs scheduling, multiplexing and HARQ interaction with PHY, managing access to radio resources. (MAC lecture).",
"correctAnswer": [1]
},
{
"question": "Which mechanism in the MAC layer is used for fast error correction and retransmission?",
"options": [
"FEC",
"HARQ",
"ARQ (only)",
"CRC-only"
],
"explanation": "HARQ (Hybrid Automatic Repeat Request) combines error detection and retransmission with soft combining for fast recovery at MAC/PHY. (MAC lecture).",
"correctAnswer": [1]
},
{
"question": "The MAC layer corresponds to which OSI model layer?",
"options": [
"Physical",
"Data Link",
"Network",
"Transport"
],
"explanation": "MAC is part of the Data Link layer (Layer 2) in the OSI model and handles access to the physical medium. (MAC lecture).",
"correctAnswer": [1]
},
{
"question": "Which modulation scheme is NOT typically used in the LTE PHY layer?",
"options": [
"QPSK",
"16QAM",
"64QAM",
"FSK"
],
"explanation": "LTE PHY commonly uses QPSK, 16QAM and 64QAM. FSK is not used in standard LTE modulation schemes. (PHY lecture).",
"correctAnswer": [3]
},
{
"question": "Which multiple-access scheme is used for the LTE uplink?",
"options": [
"OFDMA",
"SC-FDMA",
"CDMA",
"TDMA"
],
"explanation": "SC-FDMA is used on LTE uplink to provide lower PAPR for UE transmitters; OFDMA is used on downlink. (PHY lecture).",
"correctAnswer": [1]
},
{
"question": "The PHY layer in LTE corresponds to which OSI layer?",
"options": [
"Layer 2",
"Layer 3",
"Layer 1",
"Layer 4"
],
"explanation": "PHY implements the physical layer functions and corresponds to OSI Layer 1. (PHY lecture).",
"correctAnswer": [2]
},
{
"question": "The control plane in LTE is primarily responsible for:",
"options": [
"User data transfer",
"Signaling and session management",
"IP routing",
"Only encryption"
],
"explanation": "The control plane handles signaling, bearer establishment, mobility and session management, while user-plane handles user data. (Control vs User Plane lecture).",
"correctAnswer": [1]
},
{
"question": "Which protocol is commonly used for tunneling user-plane data in LTE?",
"options": [
"GTP-U",
"SCTP",
"RRC",
"DNS"
],
"explanation": "GTP-U (GPRS Tunneling Protocol - User plane) tunnels user data over the core network (e.g., between SGW and PGW). (Control & User Plane lecture).",
"correctAnswer": [0]
},
{
"question": "Which plane handles bearer establishment and QoS management?",
"options": [
"Control plane",
"User plane",
"Both equally",
"Physical plane"
],
"explanation": "Bearer establishment and QoS control are control-plane responsibilities (signaling to set up bearers with QoS). (Control vs User Plane lecture).",
"correctAnswer": [0]
},
{
"question": "What is the first message the UE sends during the LTE attach procedure?",
"options": [
"Attach Accept",
"Attach Complete",
"Attach Request",
"Authentication Request"
],
"explanation": "The attach begins with the UE sending an Attach Request to the network to start registration and session setup. (Authentication & Attach lecture).",
"correctAnswer": [2]
},
{
"question": "What is the primary purpose of the LTE attach procedure?",
"options": [
"Frequency allocation",
"Registration and session setup",
"Paging",
"SMS delivery"
],
"explanation": "Attach registers the UE with the network and triggers default bearer setup and IP allocation for session establishment. (Attach & Security lecture).",
"correctAnswer": [1]
},
{
"question": "Which authentication protocol is used for mutual authentication in LTE?",
"options": [
"EAP",
"EPS-AKA",
"PAP",
"CHAP"
],
"explanation": "EPS-AKA (Evolved Packet System Authentication and Key Agreement) provides mutual authentication between UE and network in LTE. (Authentication & Security lecture).",
"correctAnswer": [1]
},
{
"question": "What role does the HSS play in LTE security?",
"options": [
"Assigns IP addresses",
"Stores subscriber and authentication data",
"Handles paging",
"Manages radio resources"
],
"explanation": "HSS (Home Subscriber Server) stores subscriber profiles and authentication vectors used by MME for authentication. (Authentication & Security lecture).",
"correctAnswer": [1]
},
{
"question": "NAS security in LTE primarily protects which plane?",
"options": [
"User plane",
"Control plane",
"Both planes",
"Neither plane"
],
"explanation": "NAS (Non-Access Stratum) security focuses on protecting control-plane signaling between UE and core (MME). (Authentication & Security lecture).",
"correctAnswer": [1]
},
{
"question": "What is meant by 'seamless connectivity' in LTE?",
"options": [
"Changing SIM cards without reboot",
"Maintaining a stable connection during movement",
"Switching devices without logging in",
"None of the above"
],
"explanation": "Seamless connectivity refers to maintaining service continuity (voice/data) while a user moves, typically achieved via handovers and mobility management. (Seamless Connectivity lecture).",
"correctAnswer": [1]
},
{
"question": "Which EPC component is NOT directly involved in radio mobility management?",
"options": [
"eNodeB",
"MME",
"PGW",
"UE"
],
"explanation": "PGW handles external PDN access and IP allocation/policy; it is not directly involved in radio-level mobility management (that is eNodeB/MME/SGW roles). (Seamless Connectivity lecture).",
"correctAnswer": [2]
},
{
"question": "What is a common challenge for maintaining seamless connectivity at very high UE speeds?",
"options": [
"Increased handover failure risk",
"Reduced latency",
"Improved coverage",
"Simpler authentication"
],
"explanation": "High speeds increase the frequency of handovers and the risk of handover failures, which makes maintaining seamless connectivity more difficult. (Seamless Connectivity lecture).",
"correctAnswer": [0]
},
{
"question": "An intra-frequency handover in LTE means:",
"options": [
"Handover between different RATs",
"Handover between cells on the same frequency",
"Handover between different operators",
"Handover between different continents"
],
"explanation": "Intra-frequency handover occurs between cells using the same carrier frequency (within the same RAT). (Handovers lecture).",
"correctAnswer": [1]
},
{
"question": "Which of the following is an example of an Inter-RAT handover?",
"options": [
"LTE to LTE on the same frequency",
"LTE to GSM",
"LTE to LTE on a different frequency",
"LTE to LTE-A"
],
"explanation": "Inter-RAT handover refers to handovers between different radio access technologies, e.g., LTE ↔ GSM. (Handovers lecture).",
"correctAnswer": [1]
},
{
"question": "Which transport protocol is commonly used for signaling on the S1-MME (control) interface?",
"options": [
"GTP-U",
"SCTP",
"HTTP",
"FTP"
],
"explanation": "S1-MME (control-plane) uses SCTP as the transport protocol for reliable delivery of signaling messages between eNodeB and MME. (eNodeB / EPC lectures).",
"correctAnswer": [1]
},
{
"question": "Which protocol tunnels user-plane data between SGW and PGW?",
"options": [
"GTP-U",
"SCTP",
"RRC",
"ICMP"
],
"explanation": "GTP-U is used to carry user-plane packets (tunneled) through the core network, such as between SGW and PGW. (Control & User Plane lecture).",
"correctAnswer": [0]
},
{
"question": "What is the function of the X2 interface between eNodeBs?",
"options": [
"Support handover signaling and coordination between eNodeBs",
"Connect eNodeB to the PGW",
"Encrypt user data end-to-end",
"Perform DHCP for UEs"
],
"explanation": "X2 is used for inter-eNodeB signaling—helpful in handover execution, load balancing and resource coordination. (eNodeB lecture).",
"correctAnswer": [0]
},
{
"question": "What does ROHC stand for (used by PDCP)?",
"options": [
"Robust Operational Header Control",
"Robust Header Compression",
"Reliable Header Check",
"Reduced Header Code"
],
"explanation": "ROHC stands for Robust Header Compression; it reduces IP header overhead over radio links. (PDCP lecture).",
"correctAnswer": [1]
},
{
"question": "Which RLC mode is typically used when no retransmission is desired?",
"options": [
"AM (Acknowledged Mode)",
"UM (Unacknowledged Mode)",
"TM (Transparent Mode)",
"SM (Sporadic Mode)"
],
"explanation": "Unacknowledged Mode (UM) provides no retransmissions and is used for delay-sensitive applications that can tolerate some loss. (RLC lecture).",
"correctAnswer": [1]
},
{
"question": "Which modulation among the following gives the highest spectral efficiency in LTE?",
"options": [
"QPSK",
"16QAM",
"64QAM",
"BPSK"
],
"explanation": "64QAM carries more bits per symbol than QPSK or 16QAM, providing higher spectral efficiency when channel conditions allow. (PHY lecture).",
"correctAnswer": [2]
},
{
"question": "Which multiple-access scheme is used for the downlink in LTE?",
"options": [
"OFDMA",
"SC-FDMA",
"CDMA",
"TDMA"
],
"explanation": "OFDMA (Orthogonal Frequency Division Multiple Access) is used in LTE downlink to allow flexible subcarrier allocation among UEs. (PHY lecture).",
"correctAnswer": [0]
},
{
"question": "During a handover, the SGW commonly acts as:",
"options": [
"The local mobility anchor for user-plane",
"The entity that runs EPS-AKA",
"The element that assigns RLC modes",
"The UE's SIM card"
],
"explanation": "SGW typically acts as the local mobility anchor for the user plane during inter-eNodeB handovers, ensuring continuity of data flows. (EPC lecture).",
"correctAnswer": [0]
},
{
"question": "Which bearer type is established by default during the LTE attach process?",
"options": [
"Default EPS bearer",
"Dedicated bearer",
"Emergency bearer only",
"Signaling-only bearer"
],
"explanation": "During attach, a default EPS bearer is established to provide basic IP connectivity; dedicated bearers may be added later for specific QoS. (Attach & Bearer lecture).",
"correctAnswer": [0]
},
{
"question": "Which entity provides subscriber profile and authentication vectors to the MME?",
"options": [
"PGW",
"HSS",
"eNodeB",
"PCRF"
],
"explanation": "HSS (Home Subscriber Server) stores subscriber data and provides authentication information to the MME. (Authentication & Security lecture).",
"correctAnswer": [1]
},
{
"question": "Which of the following best describes HARQ?",
"options": [
"A header compression method",
"A hybrid ARQ mechanism combining error detection and retransmission",
"An IP routing protocol",
"A bearer type"
],
"explanation": "HARQ combines error detection and retransmission with soft combining at the receiver to improve link reliability and throughput. (MAC lecture).",
"correctAnswer": [1]
},
{
"question": "Which of these is NOT a role of the eNodeB?",
"options": [
"Radio resource management",
"Signal transmission/reception",
"IP address allocation for UE",
"Handover execution coordination"
],
"explanation": "eNodeB manages radio resources, executes handovers and handles PHY/MAC functions; IP address allocation is done by the PGW. (eNodeB and IP lecture).",
"correctAnswer": [2]
},
{
"question": "GTP-U is primarily used for:",
"options": [
"Carrying user-plane payloads",
"Delivering control-plane signaling between eNodeB and MME",
"Subscriber authentication",
"Header compression"
],
"explanation": "GTP-U is the tunneling protocol used for transporting user-plane packets across the EPC. (Control & User Plane lecture).",
"correctAnswer": [0]
},
{
"question": "Which element is mainly responsible for policy and charging control in the LTE architecture (PCC framework)?",
"options": [
"MME",
"PCRF",
"eNodeB",
"PDCP"
],
"explanation": "PCRF (Policy and Charging Rules Function) is responsible for policy and charging decisions in the PCC architecture; it interacts with PGW. (EPC context).",
"correctAnswer": [1]
},
{
"question": "Which layer handles header compression and integrity protection for control/user data?",
"options": [
"RLC",
"PDCP",
"MAC",
"PHY"
],
"explanation": "PDCP provides header compression (ROHC), ciphering and integrity protection for data and control-plane PDUs. (PDCP lecture).",
"correctAnswer": [1]
},
{
"question": "Which component is most directly involved in making handover decisions based on radio measurements?",
"options": [
"eNodeB (with X2/S1 support)",
"PGW",
"HSS",
"PCRF"
],
"explanation": "eNodeB uses UE measurement reports and coordinates with neighboring eNodeBs (X2) or core (S1) to execute handovers. (Handovers & eNodeB lectures).",
"correctAnswer": [0]
},



    ],
    passage_based_questions: {
  "passage_1": {
    "title": "LTE Network Architecture and EPC Components",
    "passage": "The LTE network architecture consists of two main parts: the E-UTRAN (Evolved Universal Terrestrial Radio Access Network) and the EPC (Evolved Packet Core). The E-UTRAN contains eNodeBs (evolved NodeBs), which are base stations providing radio interface to UEs. The EPC includes several key elements: MME (Mobility Management Entity) handles signaling and control plane functions; SGW (Serving Gateway) routes user data packets; PGW (PDN Gateway) provides connectivity to external networks and assigns IP addresses; and HSS (Home Subscriber Server) stores subscriber information and authentication data. This flat, all-IP architecture eliminates hierarchical elements from 3G, reducing latency.",
    "questions": [
      {
        "question": "Which LTE component is responsible for assigning IP addresses to user equipment?",
        "options": ["MME", "SGW", "PGW", "eNodeB"],
        "explanation": "The PGW assigns IP addresses and provides connectivity to external packet data networks.",
        "correctAnswer": [2]
      },
      {
        "question": "What does the MME primarily handle in LTE networks?",
        "options": ["User data routing", "IP address allocation", "Control plane signaling and mobility management", "Radio resource scheduling"],
        "explanation": "The MME handles signaling, authentication, and mobility management.",
        "correctAnswer": [2]
      },
      {
        "question": "Which element stores subscriber authentication credentials?",
        "options": ["MME", "HSS", "SGW", "eNodeB"],
        "explanation": "HSS stores subscriber profiles, authentication vectors, and QoS information.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the main advantage of LTE's flat architecture?",
        "options": ["More network elements", "Circuit-switched support", "Reduced latency and simplified topology", "Backward compatibility with 2G"],
        "explanation": "Flat architecture removes intermediate nodes like RNC, reducing latency.",
        "correctAnswer": [2]
      },
      {
        "question": "What does E-UTRAN stand for?",
        "options": ["Enhanced Universal Transmission Radio Access Network", "Evolved Universal Terrestrial Radio Access Network", "Extended Universal Telecommunication Radio Access Network", "Evolved Unified Terminal Radio Access Network"],
        "explanation": "E-UTRAN means Evolved Universal Terrestrial Radio Access Network.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_2": {
    "title": "eNodeB and the Radio Interface",
    "passage": "The eNodeB is the LTE base station responsible for managing the radio interface with the user equipment (UE). It handles radio resource management, scheduling, handover decisions, and HARQ processes. Unlike 3G, where the RNC was a separate entity, LTE integrates these functions directly into the eNodeB. eNodeBs communicate with each other using the X2 interface, which helps in handover and load balancing.",
    "questions": [
      {
        "question": "What is the main role of the eNodeB?",
        "options": ["Packet routing to the Internet", "Managing the radio interface with UE", "Storing subscriber information", "Providing IP addresses"],
        "explanation": "The eNodeB manages the radio interface, scheduling, and handovers.",
        "correctAnswer": [1]
      },
      {
        "question": "Which interface allows direct communication between eNodeBs?",
        "options": ["S1", "X2", "Uu", "Gn"],
        "explanation": "The X2 interface connects eNodeBs for handovers and coordination.",
        "correctAnswer": [1]
      },
      {
        "question": "What function was moved from the RNC to the eNodeB in LTE?",
        "options": ["Handover control", "IP address assignment", "Authentication", "Subscriber storage"],
        "explanation": "In LTE, the RNC's control tasks like handover are integrated into the eNodeB.",
        "correctAnswer": [0]
      },
      {
        "question": "Which process is related to error correction in eNodeB?",
        "options": ["ROHC", "HARQ", "ARQ only", "CRC"],
        "explanation": "eNodeB implements HARQ for fast retransmissions.",
        "correctAnswer": [1]
      },
      {
        "question": "The eNodeB belongs to which LTE subsystem?",
        "options": ["EPC", "E-UTRAN", "OSS", "IMS"],
        "explanation": "eNodeB is part of E-UTRAN, the radio access network.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_3": {
    "title": "LTE Protocol Stack",
    "passage": "The LTE protocol stack includes multiple layers. The PHY layer handles modulation and coding. The MAC layer manages scheduling and HARQ. The RLC layer ensures segmentation and retransmission. The PDCP layer performs header compression, ciphering, and integrity protection. Above these, the RRC protocol manages connection setup and handovers, while NAS messages handle mobility and session management with the core.",
    "questions": [
      {
        "question": "Which LTE layer handles header compression?",
        "options": ["MAC", "RLC", "PDCP", "PHY"],
        "explanation": "The PDCP layer provides header compression using ROHC.",
        "correctAnswer": [2]
      },
      {
        "question": "Which layer performs scheduling in LTE?",
        "options": ["PHY", "MAC", "RLC", "NAS"],
        "explanation": "The MAC layer handles scheduling and multiplexing.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the role of RLC in LTE?",
        "options": ["Handover signaling", "Segmentation and reassembly", "Ciphering", "Radio frequency allocation"],
        "explanation": "RLC segments and reassembles packets, and handles retransmissions in AM mode.",
        "correctAnswer": [1]
      },
      {
        "question": "Which protocol manages UE connection setup and handover?",
        "options": ["RRC", "PDCP", "SCTP", "HARQ"],
        "explanation": "RRC handles signaling related to connection management and handover.",
        "correctAnswer": [0]
      },
      {
        "question": "Which layer is directly above PHY?",
        "options": ["RLC", "MAC", "PDCP", "RRC"],
        "explanation": "The MAC layer sits directly above PHY in LTE.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_4": {
    "title": "IP Address Allocation in LTE",
    "passage": "In LTE, IP addresses for UEs are typically allocated by the PGW (PDN Gateway). This allocation usually occurs during the attach procedure when a default bearer is created. The PGW may use DHCP or internal mechanisms to assign IP addresses. The assigned IP allows the UE to communicate with external networks such as the Internet.",
    "questions": [
      {
        "question": "Which entity assigns IP addresses to UEs?",
        "options": ["MME", "SGW", "PGW", "eNodeB"],
        "explanation": "PGW provides IP addresses to UEs during attach.",
        "correctAnswer": [2]
      },
      {
        "question": "When does IP allocation usually occur?",
        "options": ["Detach procedure", "Attach procedure", "Paging", "Handover"],
        "explanation": "IP allocation occurs during attach when the default bearer is set up.",
        "correctAnswer": [1]
      },
      {
        "question": "Which protocol is often used for IP allocation?",
        "options": ["DHCP", "FTP", "SNMP", "RTP"],
        "explanation": "DHCP is commonly used for IP assignment in LTE.",
        "correctAnswer": [0]
      },
      {
        "question": "The default bearer is created between which two points?",
        "options": ["UE and PGW", "UE and eNodeB", "SGW and MME", "UE and HSS"],
        "explanation": "The default bearer connects UE to the PGW for IP services.",
        "correctAnswer": [0]
      },
      {
        "question": "Which network allows UEs to access the Internet?",
        "options": ["E-UTRAN", "EPC", "IMS", "NG-RAN"],
        "explanation": "The EPC, through PGW, connects UEs to external networks.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_5": {
    "title": "LTE Bearers and QoS",
    "passage": "In LTE, bearers are logical paths that carry data with specific QoS attributes. A default bearer is always established during attach, providing best-effort service. Dedicated bearers can be created for services that require specific QoS, such as low latency or guaranteed bit rate. The MME and PCRF play key roles in bearer setup and QoS enforcement.",
    "questions": [
      {
        "question": "What is a bearer in LTE?",
        "options": ["Physical channel", "Logical path with QoS attributes", "SIM card function", "A subscriber identity"],
        "explanation": "A bearer is a logical channel that provides a data path with defined QoS.",
        "correctAnswer": [1]
      },
      {
        "question": "Which bearer is established during attach?",
        "options": ["Dedicated bearer", "Default bearer", "Emergency bearer", "QoS bearer"],
        "explanation": "The default bearer is created during attach for basic connectivity.",
        "correctAnswer": [1]
      },
      {
        "question": "Which element enforces QoS policies?",
        "options": ["PGW", "PCRF", "eNodeB", "HSS"],
        "explanation": "PCRF ensures that QoS rules are applied in the core.",
        "correctAnswer": [1]
      },
      {
        "question": "Which service would likely require a dedicated bearer?",
        "options": ["Email", "Web browsing", "VoIP", "SMS"],
        "explanation": "VoIP requires a dedicated bearer for low latency.",
        "correctAnswer": [2]
      },
      {
        "question": "What does QoS stand for?",
        "options": ["Quality of Signal", "Quality of Service", "Quantity of Subscribers", "Queue of Sessions"],
        "explanation": "QoS stands for Quality of Service, defining performance attributes.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_6": {
    "title": "PDCP Layer Functions",
    "passage": "The PDCP layer provides key functions in LTE such as header compression using ROHC, ciphering for data confidentiality, and integrity protection for signaling messages. It sits above the RLC layer and works for both control-plane and user-plane data.",
    "questions": [
      {
        "question": "Which compression method is used by PDCP?",
        "options": ["Huffman", "ROHC", "LZW", "ZIP"],
        "explanation": "PDCP uses ROHC for header compression.",
        "correctAnswer": [1]
      },
      {
        "question": "Which PDCP function ensures data confidentiality?",
        "options": ["Segmentation", "Ciphering", "Integrity protection", "Scheduling"],
        "explanation": "Ciphering secures data confidentiality in PDCP.",
        "correctAnswer": [1]
      },
      {
        "question": "Which function applies only to control-plane messages?",
        "options": ["Header compression", "Integrity protection", "Ciphering", "Segmentation"],
        "explanation": "Integrity protection applies to signaling/control messages.",
        "correctAnswer": [1]
      },
      {
        "question": "Above which layer does PDCP sit?",
        "options": ["MAC", "PHY", "RLC", "RRC"],
        "explanation": "PDCP sits above RLC in the protocol stack.",
        "correctAnswer": [2]
      },
      {
        "question": "Which plane does PDCP serve?",
        "options": ["Control plane only", "User plane only", "Both user and control planes", "Neither plane"],
        "explanation": "PDCP serves both user and control planes.",
        "correctAnswer": [2]
      }
    ]
  },

  "passage_7": {
    "title": "RLC Modes",
    "passage": "The RLC (Radio Link Control) layer supports three operation modes: Transparent Mode (TM), Unacknowledged Mode (UM), and Acknowledged Mode (AM). TM is used for control messages, UM is used for real-time services where retransmission is not desired, and AM supports retransmissions for reliable data delivery.",
    "questions": [
      {
        "question": "Which RLC mode supports retransmissions?",
        "options": ["TM", "UM", "AM", "SM"],
        "explanation": "Acknowledged Mode (AM) provides retransmissions.",
        "correctAnswer": [2]
      },
      {
        "question": "Which RLC mode is used for real-time services?",
        "options": ["TM", "UM", "AM", "RM"],
        "explanation": "Unacknowledged Mode (UM) is used for real-time services like voice.",
        "correctAnswer": [1]
      },
      {
        "question": "Which mode is typically used for control messages?",
        "options": ["UM", "TM", "AM", "DM"],
        "explanation": "Transparent Mode (TM) is used for control-plane signaling.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the main job of the RLC layer?",
        "options": ["Scheduling", "Segmentation and reassembly", "Ciphering", "Header compression"],
        "explanation": "RLC handles segmentation and reassembly of PDUs.",
        "correctAnswer": [1]
      },
      {
        "question": "Which higher layer sits directly above RLC?",
        "options": ["MAC", "PHY", "PDCP", "RRC"],
        "explanation": "PDCP sits above RLC in LTE.",
        "correctAnswer": [2]
      }
    ]
  },

  "passage_8": {
    "title": "MAC Layer Responsibilities",
    "passage": "The MAC (Medium Access Control) layer is responsible for multiplexing data from higher layers, scheduling, and managing retransmissions using HARQ. It interacts closely with PHY to transmit data and ensures efficient resource usage in LTE.",
    "questions": [
      {
        "question": "What is a key MAC responsibility?",
        "options": ["Header compression", "Scheduling and multiplexing", "Authentication", "IP allocation"],
        "explanation": "MAC manages scheduling and multiplexing of radio resources.",
        "correctAnswer": [1]
      },
      {
        "question": "Which error control method is handled by MAC?",
        "options": ["CRC only", "ARQ only", "HARQ", "None"],
        "explanation": "MAC implements HARQ for retransmissions.",
        "correctAnswer": [2]
      },
      {
        "question": "MAC corresponds to which OSI layer?",
        "options": ["Physical", "Data Link", "Network", "Transport"],
        "explanation": "MAC belongs to the Data Link layer.",
        "correctAnswer": [1]
      },
      {
        "question": "Which layer does MAC interact directly with below?",
        "options": ["PDCP", "PHY", "RRC", "NAS"],
        "explanation": "MAC works with PHY for radio transmission.",
        "correctAnswer": [1]
      },
      {
        "question": "Which function is NOT handled by MAC?",
        "options": ["Scheduling", "Multiplexing", "Ciphering", "HARQ"],
        "explanation": "Ciphering is handled by PDCP, not MAC.",
        "correctAnswer": [2]
      }
    ]
  },

  "passage_9": {
    "title": "LTE PHY Layer",
    "passage": "The physical layer of LTE is responsible for modulation, coding, MIMO, and OFDM-based transmission. LTE uses OFDMA for downlink and SC-FDMA for uplink to improve efficiency and reduce power consumption. Modulation schemes include QPSK, 16QAM, and 64QAM.",
    "questions": [
      {
        "question": "Which scheme is used in LTE uplink?",
        "options": ["OFDMA", "SC-FDMA", "CDMA", "TDMA"],
        "explanation": "LTE uplink uses SC-FDMA to reduce power usage.",
        "correctAnswer": [1]
      },
      {
        "question": "Which modulation is NOT used in LTE?",
        "options": ["QPSK", "16QAM", "64QAM", "FSK"],
        "explanation": "FSK is not part of LTE modulation.",
        "correctAnswer": [3]
      },
      {
        "question": "What does LTE use for downlink multiple access?",
        "options": ["CDMA", "TDMA", "OFDMA", "SC-FDMA"],
        "explanation": "OFDMA is used in LTE downlink.",
        "correctAnswer": [2]
      },
      {
        "question": "Which OSI layer corresponds to PHY?",
        "options": ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
        "explanation": "PHY is OSI Layer 1 (physical).",
        "correctAnswer": [0]
      },
      {
        "question": "Which modulation provides highest spectral efficiency?",
        "options": ["QPSK", "16QAM", "64QAM", "BPSK"],
        "explanation": "64QAM carries more bits per symbol, providing high efficiency.",
        "correctAnswer": [2]
      }
    ]
  },

  "passage_10": {
    "title": "Authentication and Security in LTE",
    "passage": "LTE ensures secure communication using EPS-AKA for mutual authentication between UE and network. The HSS provides authentication vectors to the MME. Security includes ciphering for confidentiality and integrity protection for signaling. NAS security applies to control-plane, while AS security applies to radio access signaling and data.",
    "questions": [
      {
        "question": "Which protocol is used for mutual authentication?",
        "options": ["PAP", "EPS-AKA", "CHAP", "EAP-TLS"],
        "explanation": "EPS-AKA provides mutual authentication in LTE.",
        "correctAnswer": [1]
      },
      {
        "question": "Which entity provides authentication vectors?",
        "options": ["PGW", "MME", "HSS", "eNodeB"],
        "explanation": "HSS provides authentication vectors to MME.",
        "correctAnswer": [2]
      },
      {
        "question": "Which type of security protects control-plane messages?",
        "options": ["AS security", "NAS security", "PDCP security", "HARQ"],
        "explanation": "NAS security protects signaling/control messages.",
        "correctAnswer": [1]
      },
      {
        "question": "What does ciphering ensure?",
        "options": ["Integrity", "Confidentiality", "Authentication", "QoS"],
        "explanation": "Ciphering provides data confidentiality.",
        "correctAnswer": [1]
      },
      {
        "question": "Which type of security applies to signaling over the radio interface?",
        "options": ["NAS security", "AS security", "PCRF security", "Bearer security"],
        "explanation": "AS security protects access stratum signaling and user data.",
        "correctAnswer": [1]
      }
    ]
  },
  "passage_11": {
  "title": "LTE Overview and Architecture",
  "passage": "LTE (Long Term Evolution) is a 4G mobile technology built on an all-IP architecture that provides high data rates, low latency, and improved spectral efficiency. Its architecture has three main parts: User Equipment (UE), E-UTRAN (Evolved Radio Access Network), and EPC (Evolved Packet Core). The UE connects to the eNodeB through a radio interface, while the eNodeB links to the EPC through the S1 interface. The EPC includes elements like MME, SGW, PGW, HSS, and PCRF, each responsible for mobility management, IP allocation, security, and policy control. Because it is fully IP-based, LTE supports faster speeds and better performance compared to 3G.",
  "questions": [
    {
      "question": "LTE architecture is divided into how many main parts?",
      "options": ["Two", "Three", "Four", "Five"],
      "explanation": "LTE is divided into three main parts: UE, E-UTRAN, and EPC.",
      "correctAnswer": [1]
    },
    {
      "question": "Which of the following handles radio communication and scheduling?",
      "options": ["MME", "eNodeB", "HSS", "PCRF"],
      "explanation": "The eNodeB manages radio communication and resource scheduling in LTE.",
      "correctAnswer": [1]
    },
    {
      "question": "The EPC component responsible for allocating IP addresses is:",
      "options": ["MME", "SGW", "PGW", "PCRF"],
      "explanation": "The PGW allocates IP addresses to user equipment and connects LTE to external networks.",
      "correctAnswer": [2]
    },
    {
      "question": "The LTE network is considered all-IP because:",
      "options": ["Only calls use IP", "Both voice and data are transmitted using IP", "It supports SMS over circuit channels", "It uses multiple switching systems"],
      "explanation": "LTE is all-IP since both data and voice services are carried over packet-switched IP networks.",
      "correctAnswer": [1]
    },
    {
      "question": "Which EPC component manages QoS and charging policies?",
      "options": ["HSS", "PCRF", "MME", "SGW"],
      "explanation": "PCRF (Policy and Charging Rules Function) defines and enforces Quality of Service (QoS) and charging policies.",
      "correctAnswer": [1]
    }
  ]
},

"passage_12": {
  "title": "eNodeB Functions and Interfaces",
  "passage": "In LTE, the eNodeB is the base station connecting the user equipment (UE) to the network. Unlike 3G, where the NodeB and Radio Network Controller (RNC) were separate, LTE combines them into a single entity — the eNodeB. It handles radio resource management, mobility control, encryption, and handover operations. The eNodeB connects to the EPC via the S1 interface and to other eNodeBs using the X2 interface. This integration reduces latency and simplifies the network, ensuring faster data transmission and seamless user experience.",
  "questions": [
    {
      "question": "What does eNodeB represent in LTE?",
      "options": ["Radio gateway", "Evolved NodeB", "Enhanced Network Device", "Evolved Network Block"],
      "explanation": "eNodeB stands for Evolved NodeB, the LTE base station handling radio and control functions.",
      "correctAnswer": [1]
    },
    {
      "question": "Which interfaces does eNodeB use to connect with the EPC and other eNodeBs respectively?",
      "options": ["S1 and X2", "X2 and Uu", "Uu and S6a", "S6a and S5"],
      "explanation": "The eNodeB connects to EPC via S1 and to other eNodeBs via the X2 interface.",
      "correctAnswer": [0]
    },
    {
      "question": "What function helps eNodeB prioritize important traffic?",
      "options": ["Mobility management", "Quality of Service (QoS)", "Bearer control", "Radio multiplexing"],
      "explanation": "QoS ensures that higher-priority services like VoIP or streaming receive better bandwidth and latency.",
      "correctAnswer": [1]
    },
    {
      "question": "Why is LTE’s eNodeB faster than 3G’s NodeB + RNC combination?",
      "options": ["It uses multiple antennas", "It combines control and radio functions in one device", "It has fewer users", "It uses GSM core"],
      "explanation": "Combining control and radio functionalities within eNodeB eliminates the RNC layer, reducing delay.",
      "correctAnswer": [1]
    },
    {
      "question": "The handover process in LTE is managed primarily by:",
      "options": ["eNodeB", "MME", "PGW", "SGW"],
      "explanation": "The eNodeB manages most handovers, especially intra-LTE transitions, using the X2 interface.",
      "correctAnswer": [0]
    }
  ]
},

"passage_13": {
  "title": "LTE Handover and Mobility",
  "passage": "Handover in LTE ensures a user’s session continues seamlessly while moving between cells or network types. There are two types of handovers: Intra-RAT (within LTE) and Inter-RAT (between different technologies like LTE to 3G). The X2 interface manages direct handovers between eNodeBs for Intra-RAT, while MME coordinates Inter-RAT handovers to legacy networks. This mechanism avoids call drops and maintains service continuity during user movement.",
  "questions": [
    {
      "question": "The main goal of handover in LTE is to:",
      "options": ["Improve battery life", "Maintain seamless connectivity during movement", "Allocate IP addresses", "Reduce latency for stationary users"],
      "explanation": "Handover ensures that users maintain ongoing calls and data sessions while moving between coverage areas.",
      "correctAnswer": [1]
    },
    {
      "question": "When a user moves from LTE to LTE, it is called:",
      "options": ["Inter-RAT handover", "Intra-RAT handover", "Hard handover", "Network release"],
      "explanation": "An Intra-RAT handover happens within the same LTE technology, between two LTE cells.",
      "correctAnswer": [1]
    },
    {
      "question": "The X2 interface is used between:",
      "options": ["eNodeB and PGW", "eNodeB and eNodeB", "MME and SGW", "SGW and PGW"],
      "explanation": "The X2 interface connects two eNodeBs directly to coordinate handovers and load balancing.",
      "correctAnswer": [1]
    },
    {
      "question": "Which component handles Inter-RAT handovers (e.g., LTE to 3G)?",
      "options": ["MME", "SGW", "eNodeB", "PCRF"],
      "explanation": "MME manages Inter-RAT handovers by coordinating signaling between LTE and legacy networks.",
      "correctAnswer": [0]
    },
    {
      "question": "Why are handovers important in mobile communication?",
      "options": ["They improve antenna gain", "They prevent call drops and buffering during mobility", "They assign IP addresses", "They reset user identity"],
      "explanation": "Handover maintains continuous service by avoiding interruptions during user movement.",
      "correctAnswer": [1]
    }
  ]
},

"passage_14": {
  "title": "LTE Security and Authentication",
  "passage": "LTE security ensures that only legitimate users can connect to the network and that data remains confidential. When a UE initiates an Attach Request, the MME contacts the HSS for authentication information. The HSS provides challenge-response data to verify the UE’s SIM. Upon successful validation, encryption keys are generated to secure both control and user planes using AES and SNOW 3G algorithms. Integrity protection prevents tampering with signaling messages during transmission.",
  "questions": [
    {
      "question": "During LTE authentication, which entity verifies the user’s identity?",
      "options": ["eNodeB", "HSS", "PGW", "PCRF"],
      "explanation": "The HSS authenticates the user by validating SIM-based credentials during attach.",
      "correctAnswer": [1]
    },
    {
      "question": "The first step in connecting to the LTE network is:",
      "options": ["IP assignment", "Attach Request from UE", "Authentication Response", "Bearer creation"],
      "explanation": "The Attach Request from the UE triggers the authentication and session setup process.",
      "correctAnswer": [1]
    },
    {
      "question": "Which algorithms are commonly used in LTE for encryption?",
      "options": ["RSA and SHA", "AES and SNOW 3G", "MD5 and DES", "ECC and SHA-1"],
      "explanation": "AES and SNOW 3G are the primary algorithms used in LTE for encryption and integrity protection.",
      "correctAnswer": [1]
    },
    {
      "question": "The MME’s role in LTE security is to:",
      "options": ["Provide radio coverage", "Handle signaling and obtain authentication info", "Assign QoS", "Manage antenna handovers"],
      "explanation": "The MME communicates with HSS to fetch authentication vectors and handles signaling security.",
      "correctAnswer": [1]
    },
    {
      "question": "Integrity protection in LTE ensures:",
      "options": ["Message authenticity and tamper-proof signaling", "Faster data transfer", "Dynamic IP routing", "QoS for VoLTE"],
      "explanation": "Integrity protection ensures that signaling messages are genuine and not altered in transit.",
      "correctAnswer": [0]
    }
  ]
},

"passage_15": {
  "title": "LTE Bearers and Protocol Stack",
  "passage": "In LTE, data between the user equipment (UE) and the Internet travels through bearers — logical paths that define Quality of Service (QoS) parameters like delay and bandwidth. A default bearer is established upon attach to provide basic connectivity, while dedicated bearers serve specific services like VoIP or video streaming. The LTE protocol stack manages these bearers across several layers: PDCP handles encryption and header compression, RLC manages segmentation and reassembly, MAC controls scheduling and error correction (HARQ), and PHY performs modulation and transmission.",
  "questions": [
    {
      "question": "What is a bearer in LTE?",
      "options": ["Hardware antenna used for signaling", "Logical data path with specific QoS parameters", "Security protocol", "User identity profile"],
      "explanation": "A bearer defines a logical connection between UE and the network with specific QoS guarantees.",
      "correctAnswer": [1]
    },
    {
      "question": "Which bearer is automatically created after a successful attach?",
      "options": ["Dedicated bearer", "Default bearer", "Emergency bearer", "Paging bearer"],
      "explanation": "A default bearer is automatically set up to provide basic IP connectivity upon attach.",
      "correctAnswer": [1]
    },
    {
      "question": "The dedicated bearer is used mainly for:",
      "options": ["Text messaging", "Services requiring guaranteed QoS (e.g., VoIP/video)", "Device registration", "SIM updates"],
      "explanation": "Dedicated bearers are established for applications that need higher QoS like video or VoIP.",
      "correctAnswer": [1]
    },
    {
      "question": "Which entities cooperate to establish bearers during attach?",
      "options": ["eNodeB and HSS", "MME, SGW, and PGW", "PGW and PCRF", "UE and eNodeB only"],
      "explanation": "MME, SGW, and PGW coordinate to set up the bearer and allocate IP connectivity.",
      "correctAnswer": [1]
    },
    {
      "question": "Which layer in LTE performs encryption and header compression?",
      "options": ["RLC", "PDCP", "MAC", "PHY"],
      "explanation": "PDCP handles encryption, integrity protection, and header compression in LTE.",
      "correctAnswer": [1]
    }
  ]
}
,
"passage_16": {
  "title": "LTE Protocol Stack and Layer Functions",
  "passage": "The LTE protocol stack defines how user and control data move between the User Equipment (UE) and the eNodeB through various layers. The Packet Data Convergence Protocol (PDCP) layer performs header compression, encryption, and integrity protection. Below it, the Radio Link Control (RLC) layer manages segmentation, reassembly, and retransmission of data units. The Medium Access Control (MAC) layer is responsible for scheduling, multiplexing, and Hybrid ARQ (HARQ)-based error correction. At the base, the Physical (PHY) layer converts digital data into radio signals using modulation schemes such as QPSK or QAM. Together, these layers ensure reliable, secure, and efficient data transmission across the LTE air interface.",
  "questions": [
    {
      "question": "Which layer in LTE performs encryption and header compression?",
      "options": ["RLC", "PDCP", "MAC", "PHY"],
      "explanation": "The PDCP layer provides encryption, integrity protection, and header compression for secure and efficient data transfer.",
      "correctAnswer": [1]
    },
    {
      "question": "The RLC layer provides:",
      "options": ["QoS control only", "Segmentation, reassembly, and retransmission", "Modulation", "IP address allocation"],
      "explanation": "The RLC layer handles segmentation and reassembly of data units and performs retransmissions to ensure reliability.",
      "correctAnswer": [1]
    },
    {
      "question": "HARQ (Hybrid ARQ) operates in which layer?",
      "options": ["PDCP", "MAC", "PHY", "NAS"],
      "explanation": "HARQ operates in the MAC layer, combining error detection and retransmission to correct transmission errors efficiently.",
      "correctAnswer": [1]
    },
    {
      "question": "Which layer directly interacts with the radio channel?",
      "options": ["PDCP", "PHY", "MAC", "RLC"],
      "explanation": "The PHY (Physical) layer transmits and receives signals over the air interface using radio waves.",
      "correctAnswer": [1]
    },
    {
      "question": "What is the overall purpose of the LTE protocol stack?",
      "options": ["To compress SIM data", "To enable reliable and secure end-to-end data transfer", "To store user credentials", "To perform charging and billing"],
      "explanation": "The LTE protocol stack ensures secure, reliable, and efficient end-to-end data transfer between UE and the network.",
      "correctAnswer": [1]
    }
  ]
},

  "passage_17": {
    "title": "Evolution from 3G to 4G",
    "passage": "3G was introduced in the early 2000s to support mobile internet and multimedia services. It used technologies such as WCDMA and CDMA2000. However, 3G networks suffered from low speed, high latency, and complex design. To overcome these issues, 4G was introduced around 2010. 4G, based on LTE and WiMAX technologies, provided higher data rates, lower latency, and an all-IP architecture.",
    "questions": [
      {
        "question": "What were the main technologies used in 3G?",
        "options": ["LTE and WiMAX", "WCDMA and CDMA2000", "GSM and EDGE", "OFDMA and MIMO"],
        "explanation": "3G networks primarily used WCDMA and CDMA2000 technologies to provide mobile data and voice services.",
        "correctAnswer": [1]
      },
      {
        "question": "When was 4G introduced?",
        "options": ["2000", "2005", "2010", "2015"],
        "explanation": "4G networks were introduced around 2010, bringing high-speed data and an all-IP design.",
        "correctAnswer": [2]
      },
      {
        "question": "What type of network architecture does 4G use?",
        "options": ["Circuit-switched", "Hybrid", "All-IP", "Optical fiber"],
        "explanation": "4G employs an all-IP architecture, replacing circuit-switched systems with packet-based communication.",
        "correctAnswer": [2]
      },
      {
        "question": "What were the main limitations of 3G?",
        "options": ["High speed and simple design", "Low speed and high latency", "Lack of radio access", "Poor IP integration"],
        "explanation": "3G suffered from low data rates, high latency, and a complex network structure.",
        "correctAnswer": [1]
      },
      {
        "question": "Which 4G technology became dominant worldwide?",
        "options": ["WiMAX", "LTE", "GSM", "EDGE"],
        "explanation": "LTE became the globally dominant 4G technology due to its efficiency and compatibility.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_18": {
    "title": "Evolved Packet Core (EPC)",
    "passage": "The Evolved Packet Core (EPC) is the all-IP core network of LTE that manages both control and user planes. It connects user equipment to external packet networks, manages mobility, authentication, and Quality of Service (QoS). The EPC also handles IP address allocation and session setup between the user and the internet.",
    "questions": [
      {
        "question": "What is EPC in LTE?",
        "options": ["A base station for LTE", "A network that manages both control and user planes", "A device for encryption", "A 3G protocol"],
        "explanation": "EPC is the LTE core network responsible for managing both the control and user planes.",
        "correctAnswer": [1]
      },
      {
        "question": "What are the key functions of EPC?",
        "options": ["Routing only", "Authentication, QoS, and IP connectivity", "Hardware installation", "Modulation of signals"],
        "explanation": "EPC handles functions like authentication, QoS management, and providing IP connectivity to UEs.",
        "correctAnswer": [1]
      },
      {
        "question": "What type of networks does EPC connect to?",
        "options": ["PSTN", "Internet and IMS", "GSM core", "Wi-Fi routers"],
        "explanation": "EPC connects LTE users to packet-based networks like the Internet and IMS.",
        "correctAnswer": [1]
      },
      {
        "question": "Which entity in EPC assigns IP addresses to UE?",
        "options": ["eNodeB", "MME", "PGW", "SGW"],
        "explanation": "The PGW assigns IP addresses and provides connectivity to external data networks.",
        "correctAnswer": [2]
      },
      {
        "question": "Why is EPC important in LTE architecture?",
        "options": ["Provides real-time handovers", "Enables mobility and IP-based connectivity", "Reduces radio interference", "Increases battery backup"],
        "explanation": "EPC enables mobility, authentication, and IP-based connectivity for LTE users.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_19": {
    "title": "eNodeB and Its Functions",
    "passage": "The eNodeB is the base station in LTE that connects the user equipment (UE) to the EPC. It combines the roles of NodeB and RNC from 3G, simplifying the architecture. It enables real-time scheduling, supports MIMO and carrier aggregation, and provides direct connectivity for faster data transfer.",
    "questions": [
      {
        "question": "What is the function of eNodeB in LTE?",
        "options": ["Manages only authentication", "Connects UE to EPC and handles radio communication", "Acts as a router", "Only manages billing"],
        "explanation": "eNodeB connects user equipment to the EPC and manages radio communication and resource allocation.",
        "correctAnswer": [1]
      },
      {
        "question": "Which two 3G components are replaced by eNodeB?",
        "options": ["NodeB and RNC", "SGW and PGW", "MSC and HLR", "EPC and IMS"],
        "explanation": "eNodeB combines the functionalities of the 3G NodeB and RNC into a single LTE entity.",
        "correctAnswer": [0]
      },
      {
        "question": "What advanced features does eNodeB support?",
        "options": ["IMS", "OFDMA", "MIMO and carrier aggregation", "DNS"],
        "explanation": "eNodeB supports advanced LTE technologies like MIMO and carrier aggregation for higher throughput.",
        "correctAnswer": [2]
      },
      {
        "question": "What is the advantage of integrating RNC functions into eNodeB?",
        "options": ["Reduces latency and simplifies architecture", "Increases call drop rate", "Decreases network efficiency", "Eliminates MIMO"],
        "explanation": "Integrating RNC into eNodeB simplifies the network and reduces latency.",
        "correctAnswer": [0]
      },
      {
        "question": "Which interface enables communication between eNodeBs?",
        "options": ["X2 interface", "Uu interface", "S1 interface", "Gn interface"],
        "explanation": "The X2 interface allows eNodeBs to communicate directly with each other for handovers.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_20": {
    "title": "LTE Attach Procedure",
    "passage": "The Attach Procedure in LTE is used when the User Equipment (UE) registers with the network to receive voice and data services. During this process, the network authenticates the user, allocates an IP address, and establishes a default bearer for communication.",
    "questions": [
      {
        "question": "What is the purpose of the LTE Attach Procedure?",
        "options": ["Disconnect UE", "Register UE with network", "Perform a handover", "Update location only"],
        "explanation": "The attach procedure is used for registering the UE with the LTE network to begin data communication.",
        "correctAnswer": [1]
      },
      {
        "question": "Which bearer is created during the attach process?",
        "options": ["Default bearer", "Dedicated bearer", "Control bearer", "Temporary bearer"],
        "explanation": "The default bearer is established during attach, allowing basic data connectivity.",
        "correctAnswer": [0]
      },
      {
        "question": "What is assigned to the UE during the attach process?",
        "options": ["IMSI", "IP address", "MAC ID", "Session ID only"],
        "explanation": "The UE is assigned an IP address during the attach procedure for data communication.",
        "correctAnswer": [1]
      },
      {
        "question": "Which network element authenticates the user?",
        "options": ["eNodeB", "MME", "PGW", "SGW"],
        "explanation": "The MME handles user authentication and session establishment in LTE.",
        "correctAnswer": [1]
      },
      {
        "question": "What does the attach procedure enable for UE?",
        "options": ["Continuous mobility and session management", "Only call setup", "Only text messaging", "No handovers"],
        "explanation": "It allows continuous mobility and session management once the UE is connected.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_21": {
    "title": "Handover in LTE",
    "passage": "Handover is the process of transferring an active call or data session from one cell to another without interruption. In LTE, there are two main types of handovers: Intra-RAT (within LTE) and Inter-RAT (between LTE and other technologies such as 3G or GSM). Intra-RAT handovers are managed by eNodeBs using the X2 interface, while Inter-RAT handovers are controlled mainly by MME.",
    "questions": [
      {
        "question": "What is the purpose of handover in LTE?",
        "options": ["To increase signal strength", "To maintain continuous service when moving between cells", "To change frequency", "To authenticate UE"],
        "explanation": "Handover ensures uninterrupted service when a UE moves between coverage areas.",
        "correctAnswer": [1]
      },
      {
        "question": "What are the two types of handovers in LTE?",
        "options": ["Intra-cell and inter-cell", "Intra-RAT and Inter-RAT", "Soft and hard", "Local and remote"],
        "explanation": "LTE supports Intra-RAT (within LTE) and Inter-RAT (between different technologies) handovers.",
        "correctAnswer": [1]
      },
      {
        "question": "Which handover occurs between LTE and 3G networks?",
        "options": ["Intra-RAT", "Inter-RAT", "Soft", "Local"],
        "explanation": "Inter-RAT handovers happen between LTE and other systems like 3G or GSM.",
        "correctAnswer": [1]
      },
      {
        "question": "Who manages the Intra-RAT handover?",
        "options": ["MME", "eNodeBs", "SGW", "PGW"],
        "explanation": "Intra-RAT handovers are managed directly between eNodeBs using the X2 interface.",
        "correctAnswer": [1]
      },
      {
        "question": "What is the role of the X2 interface?",
        "options": ["Enables signaling between eNodeBs", "Provides authentication", "Allocates IP address", "Compresses headers"],
        "explanation": "The X2 interface allows signaling and coordination between eNodeBs for handovers.",
        "correctAnswer": [0]
      }
    ]
  },

  "passage_22": {
    "title": "LTE Protocol Stack",
    "passage": "The LTE protocol stack includes several layers such as PDCP, RLC, MAC, and PHY. PDCP handles header compression and security, RLC manages error correction and in-order delivery, MAC schedules data transmission, and PHY performs the actual radio transmission.",
    "questions": [
      {
        "question": "Which LTE layer handles header compression and encryption?",
        "options": ["MAC", "PDCP", "RLC", "PHY"],
        "explanation": "The PDCP layer is responsible for header compression and security functions like encryption.",
        "correctAnswer": [1]
      },
      {
        "question": "Which layer ensures in-order data delivery?",
        "options": ["MAC", "RLC", "PHY", "PDCP"],
        "explanation": "RLC ensures reliable transmission and in-order delivery of data packets.",
        "correctAnswer": [1]
      },
      {
        "question": "Which layer schedules radio resources?",
        "options": ["MAC", "PDCP", "PHY", "NAS"],
        "explanation": "The MAC layer handles scheduling of radio resources and multiplexing of data.",
        "correctAnswer": [0]
      },
      {
        "question": "Which layer converts bits into radio signals?",
        "options": ["PDCP", "RLC", "MAC", "PHY"],
        "explanation": "The PHY layer performs modulation and physical transmission over the air interface.",
        "correctAnswer": [3]
      },
      {
        "question": "Which layer directly interacts with the radio interface?",
        "options": ["MAC", "RLC", "PHY", "PDCP"],
        "explanation": "The PHY layer interfaces directly with the radio hardware for transmission and reception.",
        "correctAnswer": [2]
      }
    ]
  },

  "passage_23": {
    "title": "Control and User Plane in LTE",
    "passage": "In LTE, communication is divided into two logical planes: Control Plane (C-Plane) and User Plane (U-Plane). The Control Plane carries signaling information used for mobility management, authentication, and session setup, handled by the MME. The User Plane carries actual user data like voice, video, and web traffic, handled by SGW and PGW.",
    "questions": [
      {
        "question": "What is the function of the Control Plane?",
        "options": ["Transmit user data", "Manage signaling and mobility", "Provide encryption", "Compress headers"],
        "explanation": "The Control Plane manages signaling and mobility functions, enabling communication setup and maintenance.",
        "correctAnswer": [1]
      },
      {
        "question": "Which entity handles the Control Plane?",
        "options": ["SGW", "MME", "eNodeB", "PGW"],
        "explanation": "MME is responsible for handling signaling and control-plane operations in LTE.",
        "correctAnswer": [1]
      },
      {
        "question": "What type of data is carried by the User Plane?",
        "options": ["Signaling information", "Control messages", "Actual user data like voice and video", "Authentication keys"],
        "explanation": "The User Plane carries real user data such as voice, video, and web traffic.",
        "correctAnswer": [2]
      },
      {
        "question": "Which entities handle the User Plane?",
        "options": ["SGW and PGW", "MME only", "eNodeB", "HSS"],
        "explanation": "The SGW and PGW handle the user data transfer in the LTE User Plane.",
        "correctAnswer": [0]
      },
      {
        "question": "How do the Control and User planes differ in data type?",
        "options": ["Control plane carries user data; user plane carries signaling", "Control plane carries signaling; user plane carries user data", "Both carry control information", "Both carry user data"],
        "explanation": "The Control Plane carries signaling data while the User Plane carries user traffic.",
        "correctAnswer": [1]
      }
    ]
  }


}

  },
  unit3: {

    module1: [
  {
    "question": "Which generation of mobile networks introduced Short Message Service (SMS) and laid the groundwork for limited mobile internet browsing?",
    "options": [
      "2nd Generation",
      "1st Generation",
      "4th Generation",
      "3rd Generation"
    ],
    "explanation": "The 2nd generation introduced digital communication, enhancing voice quality and introducing SMS. It also laid the groundwork for basic data services like GPRS, enabling limited mobile internet browsing.",
    "correctAnswer": [0]
  },
  {
    "question": "What role does Massive MIMO play in 5G technology compared to 4G?",
    "options": [
      "It is used in both 4G and 5G, but is mandatory for 5G's high-frequency bands to enhance signal strength and coverage.",
      "It is mandatory for 4G networks but optional for 5G's higher frequency bands.",
      "It is optional for both 4G and 5G networks but enhances signal quality and reduces interference.",
      "It is not used in 4G but is essential for 5G to ensure coverage for high-frequency bands."
    ],
    "explanation": "Massive MIMO is employed in both 4G and 5G networks, but its use is mandatory for 5G's higher frequency bands to ensure enhanced signal strength and coverage, making it a crucial technology for the advanced capabilities of 5G.",
    "correctAnswer": [0]
  },
  {
    "question": "What key advantage does 5G's ultra-low latency provide compared to 4G?",
    "options": [
      "Increased bandwidth for more simultaneous connections",
      "Real-time responsiveness essential for applications like remote surgery and autonomous vehicles",
      "Enhanced signal strength and reduced interference",
      "Higher data rates for streaming video"
    ],
    "explanation": "5G's ultra-low latency significantly reduces data transmission delays, making it critical for applications requiring immediate response, such as remote surgery and autonomous vehicles.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following accurately describes a major advancement introduced with the 4th generation (4G) of mobile networks?",
    "options": [
      "Enhancement of voice quality and the introduction of Short Message Service (SMS)",
      "Rapid mobile Internet resembling home broadband speeds and real-time video calling",
      "Introduction of analog voice communication and the ability to converse without cords",
      "High-speed data connectivity, multimedia streaming for HD videos, and Long-Term Evolution (LTE) technology"
    ],
    "explanation": "The 4th generation (4G) introduced these advancements, significantly enhancing mobile network capabilities and services.",
    "correctAnswer": [3]
  },
  {
    "question": "Which aspect of 5G technology empowers seamless and buffer-free experiences, from high-definition video streaming to augmented reality?",
    "options": [
      "Predictive maintenance strategies",
      "Edge computing",
      "Massive Internet of Things (MIoT)",
      "Software-Defined Networking (SDN)."
    ],
    "explanation": "Edge computing is integrated with 5G's low latency and high-speed connectivity, empowers seamless and buffer-free experiences.",
    "correctAnswer": [1]
  },
  {
    "question": "What challenge did the 4th generation (4G) of mobile networks face that paved the way for 5G innovation?",
    "options": [
      "Absence of digital communication and inability to send text messages",
      "Limited to analog communication with poor voice quality",
      "Network congestion and difficulty accommodating the Internet of Things (IoT) devices",
      "Lack of mobile voice communication capabilities"
    ],
    "explanation": "4G networks faced challenges such as network congestion and the strain of connecting numerous IoT devices, which created opportunities for the innovations brought by 5G.",
    "correctAnswer": [2]
  },
  {
    "question": "What is a key difference between 4G and 5G in terms of frequency bands and bandwidth?",
    "options": [
      "5G can offer a bandwidth of up to 400 MHz, whereas 4G is confined to a maximum of 20 MHz bandwidth per cell",
      "4G can offer up to 400 MHz bandwidth, whereas 5G is limited to 20 MHz bandwidth per cell",
      "4G uses millimeter wave frequencies while 5G is confined to lower frequency bands",
      "4G and 5G both offer the same bandwidth but differ in their data rates and latency"
    ],
    "explanation": "5G technology allows for a significantly larger bandwidth of up to 400 MHz, compared to 4G's maximum of 20 MHz per cell, which is a key factor driving the higher data rates and increased capacity of 5G.",
    "correctAnswer": [0]
  },
  {
    "question": "Which feature of 5G technology allows for the creation of virtual networks tailored to specific applications or user groups, optimizing resources and service efficiency?",
    "options": [
      "Beamforming",
      "Edge Computing",
      "Network Slicing",
      "Massive MIMO"
    ],
    "explanation": "Network slicing allows for the creation of virtual networks tailored to specific applications or user groups, optimizing resources and service efficiency in 5G networks.",
    "correctAnswer": [2]
  },
  {
    "question": "Which feature of 5G technology significantly extends device battery life, promoting eco-friendliness and cost savings?",
    "options": [
      "Real-time connectivity",
      "Edge computing",
      "Massive Internet of Things (MIoT)",
      "Enhanced energy efficiency"
    ],
    "explanation": "Enhanced energy efficiency in 5G technology extends device battery life, promoting eco-friendliness and cost savings.",
    "correctAnswer": [3]
  },
  {
    "question": "What role does edge computing play in the context of 5G technology?",
    "options": [
      "Enhancing signal delivery and user experience",
      "Reducing data transmission delays and Round-Trip Time (RTT)",
      "Optimizing resources and service efficiency",
      "Bringing computation closer to end-users and reducing latency"
    ],
    "explanation": "Edge computing in the context of 5G technology involves bringing computation closer to end-users to reduce latency, enabling real-time execution of operations in demanding applications.",
    "correctAnswer": [3]
  },
  
  {
    "question": "What key feature characterizes the evolution of the Radio Access Network (RAN) in the 5G era?",
    "options": [
      "Splitting into Central Unit (CU) and Distributed Unit (DU)",
      "Convergence with various access networks",
      "Deployment using cloud-native techniques",
      "Integration of Control and User planes"
    ],
    "explanation": "In the 5G era, the RAN has evolved by splitting into the Central Unit (CU) and Distributed Unit (DU) for reduced latency and improved user experience.",
    "correctAnswer": [0]
  },
  {
    "question": "What is a significant advantage of the distributed architecture in 5G RAN compared to previous generations?",
    "options": [
      "Reduction in spectrum allocation complexity",
      "Decreased air interface latency",
      "Expansion of available frequency bands",
      "Enhanced coverage in densely populated areas"
    ],
    "explanation": "The distributed architecture allows the DU to be placed closer to the end user, reducing air interface latency and improving user experience.",
    "correctAnswer": [1]
  },
  {
    "question": "Which deployment mode of 5G utilizes existing LTE RAN and core networks, supplemented by a 5G component carrier to boost bandwidth?",
    "options": [
      "Service-Based Architecture (SBA)",
      "Standalone mode",
      "Non-standalone mode",
      "Cloud-aligned mode"
    ],
    "explanation": "Non-standalone mode of 5G utilizes existing LTE RAN and core networks, supplemented by a 5G component carrier to boost bandwidth, allowing for seamless integration of 5G capabilities alongside existing LTE infrastructure.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following statements accurately describes network slicing in 5G?",
    "options": [
      "Network slicing is only supported in non-standalone 5G deployments, utilizing existing 4G infrastructure.",
      "Network slicing divides the network into virtual networks with unique abilities, managed in hardware rather than software.",
      "Network slicing enables customization of services without physically altering the network infrastructure, maximizing efficiency and offering tailored solutions.",
      "Network slicing allows for physical alteration of the network infrastructure to meet specific user needs."
    ],
    "explanation": "This accurately describes network slicing in 5G. It emphasizes customization of services without physical changes to the infrastructure, maximizing efficiency and offering tailored solutions.",
    "correctAnswer": [2]
  },
  {
    "question": "How does the 5G Core Network differ from its 4G counterpart in terms of access network convergence?",
    "options": [
      "It utilizes cloud-native deployment techniques",
      "It employs single component Baseband Unit (BBU)",
      "It converges with various access networks, including 4G RAN, WiFi, and WiMAX",
      "It integrates Control and User planes"
    ],
    "explanation": "The 5G Core Network offers convergence with various access networks, providing unified access to legacy technologies.",
    "correctAnswer": [2]
  },
  {
    "question": "What is a distinguishing feature of Standalone (SA) 5G compared to Non-Standalone (NSA) 5G?",
    "options": [
      "Lower initial capital expenditure (CAPEX)",
      "Reliance on existing 4G infrastructure",
      "Reduced latency to as low as 1ms end-to-end",
      "Integration with existing 4G core networks"
    ],
    "explanation": "SA 5G offers reduced latency to as low as 1ms end-to-end, enabling services demanding ultra-low latency, such as automated driving and remote surgery, which is a distinguishing feature compared to NSA 5G.",
    "correctAnswer": [2]
  },
  {
    "question": "What is a key advantage of the high band frequencies in 5G spectrum allocation?",
    "options": [
      "Lightning-fast speeds in densely populated urban environments",
      "Versatility for various applications",
      "Expansive coverage in rural areas",
      "Lower latency for critical applications"
    ],
    "explanation": "High band frequencies offer extremely high bandwidth, enabling lightning-fast speeds in densely populated urban areas, making them well-suited for applications requiring high data rates.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following components is responsible for creating user sessions and ensuring smooth data flow within the network?",
    "options": [
      "UPF (User Plane Function)",
      "AMF (Access and Mobility Management Function)",
      "CU (Central Unit)",
      "SMF (Session Management Function)"
    ],
    "explanation": "The SMF (Session Management Function) is indeed responsible for creating user sessions and ensuring smooth data flow within the network.",
    "correctAnswer": [3]
  },
  {
    "question": "How do small cells contribute to mitigating network congestion in 5G networks?",
    "options": [
      "By serving as primary power sources during network outages.",
      "By restricting data usage during peak hours to alleviate strain on the network.",
      "By replacing large cell towers with more efficient infrastructure.",
      "By redirecting data traffic away from congested areas, ensuring network responsiveness."
    ],
    "explanation": "Small cells help alleviate network congestion by redirecting data traffic away from congested areas, ensuring that the network remains responsive even during peak usage times.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the following accurately describes the role of the SDN controller in Software-Defined Networking (SDN)?",
    "options": [
      "The SDN controller primarily focuses on packet forwarding and routing decisions within the network switches",
      "The SDN controller serves as the central intelligence of the SDN architecture, managing and controlling network devices through standardized protocols",
      "The SDN controller is responsible for developing network applications that interact with the control plane to define network policies and behavior",
      "The SDN controller facilitates communication between the data plane and the control plane, ensuring seamless forwarding of data packets"
    ],
    "explanation": "The SDN controller acts as the central intelligence of the SDN architecture, managing and controlling network devices through standardized protocols like OpenFlow or southbound APIs.",
    "correctAnswer": [1]
  }

],
    module2: [
  {
    "question": "Why are millimeter waves significant in the context of 5G networks?",
    "options": [
      "They offer lower data capacity compared to previous generations",
      "They exploit previously unused bandwidth for higher data rates",
      "They have a longer range compared to lower frequency bands",
      "They are less prone to interference in densely populated areas"
    ],
    "explanation": "Millimeter waves open up previously unused bandwidth, allowing for higher data rates in 5G networks.",
    "correctAnswer": [1]
  },
  {
    "question": "What is one of the main benefits of MIMO technology in 5G networks?",
    "options": [
      "Decreased spectral efficiency",
      "Limited coverage range",
      "Increased capacity",
      "Reduced data transfer speed"
    ],
    "explanation": "MIMO technology allows a 5G network to handle more users at higher data speeds without congestion, thus increasing the overall capacity of the network.",
    "correctAnswer": [2]
  },
  {
    "question": "How can the challenges associated with millimeter waves in 5G networks be addressed?",
    "options": [
      "By increasing the wavelength of millimeter waves",
      "By relying solely on lower frequency bands for data transmission",
      "By implementing technologies like Beamforming and massive MIMO",
      "By reducing the complexity of network design"
    ],
    "explanation": "Beamforming and massive MIMO help mitigate the challenges associated with millimeter waves in 5G networks.",
    "correctAnswer": [2]
  },
  {
    "question": "What role do millimeter waves play in 5G networks?",
    "options": [
      "They enable faster data speeds and support for more users",
      "They can penetrate buildings and obstacles easily",
      "They have longer wavelengths than lower frequency bands",
      "They offer a smaller available bandwidth compared to lower frequency bands"
    ],
    "explanation": "They enable faster data speeds and support for more users. Millimeter waves have a larger available bandwidth compared to lower frequency bands, allowing them to carry more data and support faster data speeds and more users.",
    "correctAnswer": [0]
  },
  {
    "question": "Which statement accurately describes the role of Massive MIMO in 5G networks?",
    "options": [
      "Massive MIMO enhances data rates by utilizing fewer antennas compared to traditional MIMO",
      "Massive MIMO improves network performance by deploying a massive number of antennas at a single base station",
      "Massive MIMO decreases network capacity due to its reliance on higher frequency bands",
      "Massive MIMO is only effective in providing coverage in rural areas with sparse populations"
    ],
    "explanation": "This is evident in the passage: In our exploration of Massive Multiple Input Multiple Output (MIMO), we've examined how it builds upon previous technology by deploying a massive number of antennas at a single base station.",
    "correctAnswer": [1]
  },
  {
    "question": "What is one of the primary advantages of edge computing compared to traditional data transmission?",
    "options": [
      "Enhancing security by centralizing data processing",
      "Reducing latency by processing data at the network's edge",
      "Slowing down response times due to decentralized data centers",
      "Increasing the physical distance data travels"
    ],
    "explanation": "Edge computing reduces latency by processing data closer to the source or user, minimizing the distance data must travel.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the significance of Massive MIMO's \"balloon coverage\"?",
    "options": [
      "Balloon coverage allows Massive MIMO to provide broad coverage over a large area by deploying a massive number of antennas",
      "Balloon coverage describes the wider coverage area achieved by utilizing fewer antennas at a single base station",
      "Balloon coverage indicates the limited coverage area of Massive MIMO due to its reliance on higher frequency bands",
      "Balloon coverage refers to the ability of Massive MIMO to deploy fewer antennas compared to traditional MIMO systems"
    ],
    "explanation": "It involves deploying a massive number of antennas... at a single base station. These antennas work together to transmit and receive multiple data signals simultaneously, creating what we call \"balloon coverage.\"",
    "correctAnswer": [0]
  },
  {
    "question": "What is one of the key benefits of Edge Computing in a 5G network?",
    "options": [
      "Limiting the number of users accessing the network",
      "Increasing the distance data must travel, thus reducing latency",
      "Enhancing security by encrypting data at centralized servers",
      "Reducing latency by processing data at the network's edge"
    ],
    "explanation": "Edge Computing reduces latency by processing data closer to the source or destination, minimizing data travel distances.",
    "correctAnswer": [3]
  },
  {
    "question": "How does edge computing benefit real-time data analysis in various industries?",
    "options": [
      "By increasing delays and response times",
      "By centralizing data processing in remote data centers",
      "By decentralizing data processing and reducing delays",
      "By limiting data processing to a single data center"
    ],
    "explanation": "Edge computing decentralizes data processing, reducing delays and enabling faster real-time data analysis in various industries.",
    "correctAnswer": [2]
  },
  {
    "question": "How does AI contribute to the future of 5G networks?",
    "options": [
      "By increasing latency and response times",
      "By centralizing network management and resource allocation",
      "By reducing the autonomy of critical services",
      "By optimizing performance, efficiency, and increasing autonomy"
    ],
    "explanation": "AI contributes to the future of 5G networks by optimizing performance, efficiency, and increasing autonomy through independent decision-making.",
    "correctAnswer": [3]
  },
  
  {
    "question": "Which component of 5G RAN supports the lower layers of the protocol stack?",
    "options": [
      "Antenna",
      "Centralized Unit (CU)",
      "Radio Unit (RU)",
      "Distributed Unit (DU)"
    ],
    "explanation": "The Distributed Unit (DU) supports the lower layers of the protocol stack, including RLC, MAC, and PHY layers.",
    "correctAnswer": [3]
  },
  {
    "question": "Which type of small cell is primarily used in homes and small offices?",
    "options": [
      "Femtocell",
      "Microcell",
      "Metrocell",
      "Picocell"
    ],
    "explanation": "Femtocells are designed for use in homes and small offices, providing localized coverage.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the primary function of the Centralized Unit (CU) in 5G RAN?",
    "options": [
      "To connect the Radio Unit (RU) to the Distributed Unit (DU).",
      "To handle the transmission and reception of radio signals.",
      "To support the higher layers of the protocol stack, such as SDAP, PDCP, and RRC.",
      "To provide power supply and cooling for the network equipment."
    ],
    "explanation": "The Centralized Unit (CU) supports the higher layers of the protocol stack, ensuring proper data processing and management.",
    "correctAnswer": [2]
  },
  {
    "question": "Which function in the 5G Core Network is responsible for session management?",
    "options": [
      "Access and Mobility Management Function (AMF)",
      "Session Management Function (SMF)",
      "Network Slice Selection Function (NSSF)",
      "Authentication Server Function (AUSF)"
    ],
    "explanation": "The Session Management Function (SMF) is responsible for establishing and managing sessions in the 5G Core Network.",
    "correctAnswer": [1]
  },
  {
    "question": "Which network slicing use case is crucial for intelligent traffic management and environmental monitoring in smart cities?",
    "options": [
      "Ultra-Reliable Low-Latency Communication (URLLC)",
      "Enhanced Mobile Broadband (eMBB)",
      "Network Slicing Management (NSM)",
      "Massive Machine Type Communications (mMTC)"
    ],
    "explanation": "Massive Machine Type Communications (mMTC) is crucial for intelligent traffic management and environmental monitoring in smart cities.",
    "correctAnswer": [3]
  },
  {
    "question": "What is the role of the Network Repository Function (NRF) in the 5G Core Network?",
    "options": [
      "To provide registration and discovery functionality for Network Functions (NFs).",
      "To facilitate a common authentication framework.",
      "To support location determination for User Equipment (UE).",
      "To manage access control and mobility."
    ],
    "explanation": "The Network Repository Function (NRF) provides registration and discovery functionality, enabling Network Functions (NFs) to discover and communicate with each other.",
    "correctAnswer": [0]
  },
  {
    "question": "How do 5G User Equipment (UE) enhance network performance?",
    "options": [
      "By only supporting a single frequency band.",
      "By focusing solely on voice communication improvements.",
      "By leveraging outdated technologies from previous generations.",
      "By supporting multiple frequency bands and enabling multi-connectivity."
    ],
    "explanation": "5G User Equipment (UE) enhance network performance by supporting multiple frequency bands and enabling multi-connectivity, which improves coverage, performance, and reliability.",
    "correctAnswer": [3]
  },
  {
    "question": "What role does the Central Unit (CU) in 5G RAN play in enhancing network performance?",
    "options": [
      "It handles control plane signaling and user plane data processing separately.",
      "It only supports the control plane without any user data processing.",
      "It combines control and user plane functions into a single unit.",
      "It reduces network flexibility and scalability."
    ],
    "explanation": "The Central Unit (CU) in 5G RAN enhances network performance by separating the control plane (CU-CP) and user plane (CU-UP), which allows for better scalability, reduced latency, and efficient resource management.",
    "correctAnswer": [0]
  },
  {
    "question": "In Distributed Cloud RAN, where are the Central Unit (CU) and Distributed Unit (DU) typically located?",
    "options": [
      "Both are located at the radio site.",
      "Both are cloudified in a data center.",
      "CU is cloudified in a data center, and DU is located at the radio site.",
      "Both are located in the user equipment."
    ],
    "explanation": "In Distributed Cloud RAN, the Central Unit (CU) is cloudified in a data center, while the Distributed Unit (DU) remains at the radio site.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the primary function of the Common Public Radio Interface (CPRI) in 5G networks?",
    "options": [
      "To connect the RU to the DU, forming the fronthaul in Cloud RAN.",
      "To connect user equipment to the base station.",
      "To provide backhaul connectivity.",
      "To connect the Core Network (5GC) to the RAN."
    ],
    "explanation": "The Common Public Radio Interface (CPRI) connects the Radio Unit (RU) to the Distributed Unit (DU), forming the fronthaul in Cloud RAN.",
    "correctAnswer": [0]
  }

],
    module3: [
  {
    "question": "Which protocol layer in 5G supports both integrity protection and ciphering for both the Control Plane (CP) and User Plane (UP)?",
    "options": [
      "MAC",
      "RLC",
      "SDAP",
      "PDCP"
    ],
    "explanation": "In 5G, the PDCP layer supports both integrity protection and ciphering for both the Control Plane (CP) and User Plane (UP).",
    "correctAnswer": [3]
  },
  {
    "question": "What function does the Radio Resource Control (RRC) layer perform in 5G networks?",
    "options": [
      "Performs integrity and ciphering protection",
      "Manages Quality of Service (QoS)",
      "Manages signaling and control functions",
      "Handles data transportation"
    ],
    "explanation": "The RRC layer manages signaling and control functions in 5G networks.",
    "correctAnswer": [2]
  },
  {
    "question": "Which layer in the NR (New Radio) protocol stack is responsible for error detection, modulation, and demodulation?",
    "options": [
      "RLC Layer",
      "Physical Layer (PHY)",
      "MAC Layer",
      "Control Plane (CP)"
    ],
    "explanation": "The Physical Layer (PHY) is responsible for error detection, modulation, and demodulation in the NR protocol stack.",
    "correctAnswer": [1]
  },
  {
    "question": "What is one of the key characteristics of the 5G Core Network (5GC) compared to the 4G Evolved Packet Core (EPC)?",
    "options": [
      "Connection-oriented architecture",
      "Uses Service-Based Architecture (SBA)",
      "Uses reference-point representation",
      "Communicates using Diameter"
    ],
    "explanation": "The 5G Core Network (5GC) uses Service-Based Architecture (SBA), which is different from the 4G EPC's reference-point representation.",
    "correctAnswer": [1]
  },
  {
    "question": "Which interface in the NG-RAN connects multiple gNBs and NG-eNBs?",
    "options": [
      "NG-U",
      "F1",
      "E1",
      "Xn"
    ],
    "explanation": "The Xn interface allows one or more gNBs to connect to NG-eNBs and supports signaling information exchange and PDU forwarding.",
    "correctAnswer": [3]
  },
  {
    "question": "What layer supports the multiplexing of traffic of different PDU sessions in the NG-U interface?",
    "options": [
      "RLC",
      "SCTP",
      "MAC",
      "GTP-U"
    ],
    "explanation": "GTP-U supports the multiplexing of traffic of different PDU sessions in the NG-U interface.",
    "correctAnswer": [3]
  },
  {
    "question": "Which interface uses SCTP/IP as the transport protocol for reliable signaling message delivery?",
    "options": [
      "Xn-U",
      "NG-C",
      "E1",
      "F1"
    ],
    "explanation": "The NG-C interface uses SCTP/IP as the transport protocol for reliable signaling message delivery.",
    "correctAnswer": [1]
  },
  {
    "question": "What protocol is used for interaction between all Control Plane entities in the 5G core network?",
    "options": [
      "Diameter",
      "GTP-U",
      "SCTP",
      "HTTP"
    ],
    "explanation": "HTTP is used for interaction between all Control Plane entities in the 5G core network.",
    "correctAnswer": [3]
  },
  {
    "question": "In the 5G core network, what is the role of the Service-Based Interface (SBI)?",
    "options": [
      "To control radio resource allocation",
      "To manage physical layer functions",
      "To handle user data encryption",
      "To enable services to communicate using HTTP-based APIs"
    ],
    "explanation": "The SBI enables services to communicate using HTTP-based APIs in the 5G core network.",
    "correctAnswer": [3]
  },
  {
    "question": "What is a key characteristic of the Subscribe-Notify mechanism in the 5G core network?",
    "options": [
      "It only supports one-time notifications",
      "It is used for data encryption",
      "It requires explicit subscription requests",
      "It allows multiple NFs to subscribe to the same service"
    ],
    "explanation": "The Subscribe-Notify mechanism allows multiple network functions to subscribe to the same service.",
    "correctAnswer": [3]
  },
  
  {
    "question": "What is the purpose of using phase shifters in beamforming?",
    "options": [
      "To increase the cost",
      "To steer the common beam without moving the antennas",
      "To increase signal interference",
      "To reduce the number of antennas"
    ],
    "explanation": "Phase shifters allow the common beam to be steered electronically without moving the antennas.",
    "correctAnswer": [1]
  },
  {
    "question": "Which factor contributes to the enhanced signal strength in beamforming?",
    "options": [
      "Increased transmit power",
      "Higher frequency bands",
      "Reduced number of devices",
      "Concentration of energy directly to the target"
    ],
    "explanation": "Beamforming enhances signal strength by concentrating energy directly towards the target device.",
    "correctAnswer": [3]
  },
  {
    "question": "Which challenge is associated with the physical limitations of beamforming at high frequencies?",
    "options": [
      "Low computational demands",
      "Simple design",
      "Reduced integration complexity",
      "High heat dissipation"
    ],
    "explanation": "High-frequency antennas used in beamforming can generate excessive heat that must be managed.",
    "correctAnswer": [3]
  },
  {
    "question": "What does MIMO stand for in the context of 5G networks?",
    "options": [
      "Multiple Input Multiple Output",
      "Multiple Input Medium Output",
      "Minimum Input Maximum Output",
      "Maximum Input Minimum Output"
    ],
    "explanation": "MIMO stands for Multiple Input Multiple Output, a technology that uses multiple antennas to improve network performance.",
    "correctAnswer": [0]
  },
  {
    "question": "How does Massive MIMO enhance network capacity in 5G?",
    "options": [
      "By reducing the number of users",
      "By using a single antenna",
      "By decreasing the signal strength",
      "By using many simultaneous transmit and receive streams"
    ],
    "explanation": "Massive MIMO uses many simultaneous transmit and receive streams controlled by advanced software to create much higher network capacity.",
    "correctAnswer": [3]
  },
  {
    "question": "What is one of the main drivers behind the implementation of Massive MIMO?",
    "options": [
      "Reduced signal processing",
      "Low cost",
      "Capacity requirements",
      "Simple design"
    ],
    "explanation": "One of the main drivers behind the implementation of Massive MIMO is the capacity requirements of modern networks.",
    "correctAnswer": [2]
  },
  {
    "question": "What is a key characteristic of digital beamforming?",
    "options": [
      "It is located completely in the digital domain and enables multiple beams and streams from the same antenna array.",
      "It is only suitable for mmWave frequencies above 6 GHz",
      "It has a lower cost and complexity compared to analog beamforming.",
      "It changes the phase and amplitude of each antenna element in the analog domain."
    ],
    "explanation": "Digital beamforming is located completely in the digital domain, enabling multiple beams and streams from the same antenna array.",
    "correctAnswer": [0]
  },
  {
    "question": "What does hybrid beamforming combine?",
    "options": [
      "MIMO and beamforming technologies",
      "3D beamforming and User-Specific beamforming",
      "Digital and analog beamforming",
      "Single-User and Multi-User MIMO"
    ],
    "explanation": "Hybrid beamforming combines aspects of both digital and analog beamforming.",
    "correctAnswer": [2]
  },
  {
    "question": "What is a characteristic feature of Massive MIMO?",
    "options": [
      "It uses less than 8 controllable antenna elements.",
      "It is more practical at low frequency bands.",
      "It enables 3D beamforming.",
      "It requires fewer transmission ports than MIMO streams."
    ],
    "explanation": "Massive MIMO enables 3D beamforming, providing more degrees of freedom in focusing the signal.",
    "correctAnswer": [2]
  },
  {
    "question": "Why is Massive MIMO considered more energy-efficient?",
    "options": [
      "It does not require sophisticated signal processing.",
      "It minimizes wasteful transmission by directing radiation towards users.",
      "It uses fewer antennas.",
      "It operates only at low frequencies."
    ],
    "explanation": "Massive MIMO is more energy-efficient because it directs radiation towards users, minimizing wasteful transmission and reducing interference.",
    "correctAnswer": [1]
  }

],
    module4: [
  {
    "question": "What key technology does Industry 4.0 use to connect machines, systems, and people for smarter and more sustainable production methods?",
    "options": [
      "Computers and telecommunication",
      "Water and steam power",
      "IoT, cloud computing, and AI",
      "Gas and oil power"
    ],
    "explanation": "Industry 4.0 leverages IoT (Internet of Things), cloud computing, and AI (Artificial Intelligence) to create smart, connected, and sustainable manufacturing systems.",
    "correctAnswer": [2]
  },
  {
    "question": "How does 5G technology enhance Industry 4.0?",
    "options": [
      "By reducing the need for electricity",
      "By eliminating the need for automation",
      "By providing high transfer rates, low latency, reliability, and security",
      "By using water and steam power for manufacturing"
    ],
    "explanation": "5G technology enhances Industry 4.0 by providing high-speed data transfer, ultra-low latency, high reliability, and robust security, enabling real-time communication and control in smart manufacturing.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following processes data at the network's edge to minimize latency and improve response times?",
    "options": [
      "Cloud computing",
      "Manual labor",
      "Assembly lines",
      "Edge computing"
    ],
    "explanation": "Edge computing processes data closer to the source (at the network's edge) rather than in centralized cloud data centers, reducing latency and enabling faster response times for time-critical applications.",
    "correctAnswer": [3]
  },
  {
    "question": "What is one major benefit of Industry 4.0 in terms of operational costs?",
    "options": [
      "Higher inventory costs",
      "Reduced equipment downtime and operational costs",
      "Slower order fulfillment",
      "Increased equipment downtime"
    ],
    "explanation": "Industry 4.0 enables predictive maintenance and real-time monitoring, which reduces equipment downtime and lowers operational costs through improved efficiency.",
    "correctAnswer": [1]
  },
  {
    "question": "What is a significant technical challenge faced by Industry 4.0?",
    "options": [
      "Lack of need for data utilization",
      "Decrease in cybersecurity risks",
      "Increased cybersecurity risks",
      "High initial investment costs"
    ],
    "explanation": "Industry 4.0 faces increased cybersecurity risks due to the interconnected nature of IoT devices, networks, and systems, making them vulnerable to cyberattacks and data breaches.",
    "correctAnswer": [2]
  },
  {
    "question": "What is one of the financial challenges of implementing Industry 4.0 technologies?",
    "options": [
      "Low costs for infrastructure upgrades",
      "High initial costs and expensive re-skilling programs",
      "Reduced need for re-skilling workers",
      "Immediate return on investment"
    ],
    "explanation": "Implementing Industry 4.0 requires significant upfront investment in new technologies, infrastructure upgrades, and comprehensive workforce re-skilling programs, which can be financially challenging.",
    "correctAnswer": [1]
  },
  {
    "question": "What fundamental capability do IoT devices provide that is essential for their applications?",
    "options": [
      "Manual data entry",
      "Water and steam power usage",
      "Data collection, processing, and communication",
      "Manufacturing mass production"
    ],
    "explanation": "IoT devices are designed to collect data from their environment, process it, and communicate with other devices and systems, enabling automation and intelligent decision-making.",
    "correctAnswer": [2]
  },
  {
    "question": "Which factor significantly contributes to the affordability and functionality of IoT devices?",
    "options": [
      "Lack of connectivity options",
      "Low-cost, low-power transducers",
      "Manual data processing",
      "High-power transducers"
    ],
    "explanation": "Low-cost, low-power transducers (sensors and actuators) make IoT devices affordable and energy-efficient, enabling widespread deployment in various applications.",
    "correctAnswer": [1]
  },
  {
    "question": "How does cloud computing contribute to the IoT ecosystem?",
    "options": [
      "By providing essential infrastructure and services for data storage and analytics",
      "By eliminating the need for internet access",
      "By reducing the need for sensors",
      "By decreasing device operational life"
    ],
    "explanation": "Cloud computing provides scalable infrastructure and services for storing, processing, and analyzing the massive amounts of data generated by IoT devices, enabling advanced analytics and insights.",
    "correctAnswer": [0]
  },
  {
    "question": "How do connected vehicles utilize IoT to enhance safety and efficiency?",
    "options": [
      "Through vehicle-to-vehicle communication and traffic prediction",
      "By increasing fuel consumption",
      "By reducing the need for software updates",
      "By eliminating the need for automation"
    ],
    "explanation": "Connected vehicles use IoT for vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication, enabling real-time traffic prediction, collision avoidance, and improved traffic management for enhanced safety and efficiency.",
    "correctAnswer": [0]
  },

  {
    "question": "What are the key security requirements for 5G networks?",
    "options": [
      "Robust encryption, secure authentication, resilience against Denial of Service attacks, stringent privacy protections, and adherence to international standards",
      "Reduced operational costs and improved network efficiency",
      "Enhanced user interfaces and better customer service",
      "Fast data transmission and increased bandwidth"
    ],
    "explanation": "5G networks require comprehensive security measures including robust encryption, secure authentication mechanisms, DDoS protection, strict privacy protections, and compliance with international security standards to protect against sophisticated threats.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following is NOT considered a threat actor in 5G networks?",
    "options": [
      "Cyber criminals",
      "State-sponsored groups",
      "Hacktivists",
      "Network engineers"
    ],
    "explanation": "Network engineers are legitimate professionals who design, maintain, and secure networks. They are not threat actors. Threat actors include cyber criminals, state-sponsored groups, and hacktivists who attempt to compromise network security.",
    "correctAnswer": [3]
  },
  {
    "question": "What type of attacks do sophisticated threat actors often employ in 5G networks?",
    "options": [
      "Basic malware and spyware",
      "Advanced Persistent Threats, zero-day exploits, and artificial intelligence",
      "Traditional denial-of-service attacks",
      "Simple phishing attacks"
    ],
    "explanation": "Sophisticated threat actors use Advanced Persistent Threats (APTs), zero-day exploits, and AI-powered attacks to target 5G networks, making these attacks more complex and harder to detect than traditional methods.",
    "correctAnswer": [1]
  },
  {
    "question": "Why are traditional security measures often inadequate against sophisticated attacks on 5G networks?",
    "options": [
      "They are too expensive to implement",
      "They improve network speed but not security",
      "They focus only on physical security",
      "They are reactive and address only known vulnerabilities"
    ],
    "explanation": "Traditional security measures are reactive, addressing only known vulnerabilities after they are discovered. Sophisticated attacks on 5G networks use novel techniques including zero-day exploits and APTs that bypass conventional defenses.",
    "correctAnswer": [3]
  },
  {
    "question": "Which of the following is an attack vector in 5G networks?",
    "options": [
      "Compromised user equipment and IoT devices",
      "Reduced data transmission speeds",
      "Enhanced customer support",
      "Improved network efficiency"
    ],
    "explanation": "Compromised user equipment and IoT devices serve as entry points (attack vectors) for malicious actors to infiltrate 5G networks, potentially leading to data breaches and network disruptions.",
    "correctAnswer": [0]
  },
  {
    "question": "What is a potential consequence of unauthorized physical access to the gNodeB?",
    "options": [
      "Tampering, theft, vandalism, and service interruptions",
      "Improved data encryption",
      "Increased network speed",
      "Better user authentication"
    ],
    "explanation": "Unauthorized physical access to gNodeBs (5G base stations) can result in equipment tampering, theft, vandalism, or intentional service disruptions, compromising network availability and security.",
    "correctAnswer": [0]
  },
  {
    "question": "Why do 5G networks face significant security challenges?",
    "options": [
      "Because of fragmented security measures and interoperability with legacy systems",
      "Because they use outdated technology",
      "Due to reduced user demand",
      "Due to increased bandwidth and speed"
    ],
    "explanation": "5G networks face security challenges due to fragmented security implementations across different vendors and the need to interoperate with less secure legacy systems (4G, 3G), creating potential vulnerabilities.",
    "correctAnswer": [0]
  },
  {
    "question": "What strategy is essential for effective protection of 5G networks?",
    "options": [
      "Increasing operational costs",
      "Comprehensive defense-in-depth strategy",
      "Single-layer security approach",
      "Reducing the number of connected devices"
    ],
    "explanation": "A comprehensive defense-in-depth strategy employs multiple layers of security controls throughout the network infrastructure, ensuring that if one layer is breached, others continue to provide protection.",
    "correctAnswer": [1]
  },
  {
    "question": "Which organization is responsible for setting security standards from 3G to 5G?",
    "options": [
      "IETF",
      "ETSI ISG NFV",
      "3GPP",
      "NIST"
    ],
    "explanation": "3GPP (3rd Generation Partnership Project) is the organization responsible for developing technical specifications and security standards for mobile telecommunications from 3G through 5G networks.",
    "correctAnswer": [2]
  },
  {
    "question": "What is the role of the Authentication Server Function (AUSF) in 5G networks?",
    "options": [
      "Managing subscription data",
      "Handling network authentication and securing signaling",
      "Working with UDM for secure user authentication",
      "Protecting communication between networks"
    ],
    "explanation": "The AUSF works with the UDM (Unified Data Management) to perform secure user authentication in 5G networks, ensuring that only authorized users can access network services.",
    "correctAnswer": [2]
  }
],
    module5: [
    {
    "question": "How does 5G improve healthcare?",
    "options": [
      "By increasing the cost of medical procedures",
      "By enabling remote surgeries and supporting real-time patient monitoring",
      "By reducing the speed of data transmission",
      "By limiting access to medical data"
    ],
    "explanation": "5G's ultra-low latency and high reliability enable remote surgeries, real-time patient monitoring, telemedicine, and rapid transmission of medical imaging data, revolutionizing healthcare delivery.",
    "correctAnswer": [1]
  },
  {
    "question": "What benefit does 5G bring to supply chains?",
    "options": [
      "It eliminates the need for data management",
      "It increases the complexity of operations",
      "It decreases security measures for data and goods",
      "It automates operations and provides real-time data transmission to streamline operations and reduce costs"
    ],
    "explanation": "5G enables automation, real-time tracking, predictive analytics, and seamless data transmission across supply chains, improving efficiency, reducing costs, and enhancing visibility of goods in transit.",
    "correctAnswer": [3]
  },
  {
    "question": "How do fixed wireless networks benefit from 5G technology?",
    "options": [
      "They reduce the reliability of internet access",
      "They offer affordable, high-speed internet, especially for underserved areas",
      "They provide slower internet speeds",
      "They become more expensive and less accessible"
    ],
    "explanation": "5G fixed wireless access (FWA) provides high-speed internet without the need for physical cable infrastructure, making it cost-effective for deploying broadband in rural and underserved areas.",
    "correctAnswer": [1]
  },
  {
    "question": "What is one way 5G helps bridge the digital divide?",
    "options": [
      "By increasing internet costs for underserved areas",
      "By reducing the availability of high-speed internet",
      "By limiting access to digital technologies",
      "By promoting economic development and education, helping lift millions out of poverty"
    ],
    "explanation": "5G technology helps bridge the digital divide by providing affordable high-speed internet access to underserved and remote areas, enabling access to education, economic opportunities, and digital services that can help lift communities out of poverty.",
    "correctAnswer": [3]
  },
  {
    "question": "In smart cities, how does 5G enhance urban living?",
    "options": [
      "By reducing traffic management capabilities",
      "By limiting public service availability",
      "By increasing air pollution levels",
      "By improving traffic management, air quality monitoring, and smarter public services"
    ],
    "explanation": "5G enables smart city applications including intelligent traffic management systems, real-time air quality monitoring, smart lighting, waste management, and enhanced public services, improving urban sustainability and quality of life.",
    "correctAnswer": [3]
  },
  {
    "question": "What is one benefit of 5G in smart stadia and venues?",
    "options": [
      "Limited coverage and reduced shopping efficiency",
      "Increased network congestion",
      "Frictionless shopping and better coverage through network slicing and edge computing",
      "Decreased user experience quality"
    ],
    "explanation": "5G enhances experiences in stadiums and large venues through network slicing for dedicated bandwidth, edge computing for low latency, augmented reality features, frictionless mobile payments, and improved connectivity for dense crowds.",
    "correctAnswer": [2]
  },
  {
    "question": "How does 5G support connected and driverless vehicles?",
    "options": [
      "By limiting data exchange between vehicles",
      "By increasing communication latency between vehicles",
      "By ensuring low-latency, high-volume communication, improving safety and efficiency",
      "By reducing the efficiency of autonomous driving systems"
    ],
    "explanation": "5G provides the ultra-low latency and high-bandwidth communication required for vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication, enabling real-time decision making for autonomous vehicles and improving road safety.",
    "correctAnswer": [2]
  },
  {
    "question": "What advantage does 5G bring to gaming and augmented reality (AR)?",
    "options": [
      "Seamless, high-quality experiences with multi-modal AR and immersive gaming",
      "Limited support for augmented reality applications",
      "Increased latency and lower-quality visuals",
      "Reduced interactivity and engagement"
    ],
    "explanation": "5G's high bandwidth and low latency enable cloud gaming, multi-modal augmented reality experiences, immersive VR/AR applications, and real-time multiplayer gaming without lag or quality degradation.",
    "correctAnswer": [0]
  },
  {
    "question": "Which technology improves efficiency and reduces latency in TDD deployments?",
    "options": [
      "IAB and Smart Repeaters",
      "AI/ML Data-Driven Designs",
      "Enhanced MIMO",
      "Evolved Duplexing"
    ],
    "explanation": "Evolved Duplexing technologies improve the efficiency and reduce latency in Time Division Duplex (TDD) deployments by optimizing the allocation of time slots for uplink and downlink transmission.",
    "correctAnswer": [3]
  },
  {
    "question": "What is the focus of Enhanced Uplink and Broadband Evolution in Release 18?",
    "options": [
      "Increasing latency and power consumption",
      "Optimizing 5G performance and efficiency",
      "Reducing device-to-network transmission performance",
      "Limiting the capabilities of 5G NR devices"
    ],
    "explanation": "Release 18 focuses on Enhanced Uplink and Broadband Evolution to optimize 5G performance and efficiency, improving uplink speeds, coverage, and overall network capacity for better user experiences.",
    "correctAnswer": [1]
  },
    {
    "question": "Which technology enables fast reconfiguration of 5G networks using software?",
    "options": ["SDN", "Massive MIMO", "AMF updates", "mmWave steering"],
    "explanation": "SDN allows centralized, programmable control for flexible networking.",
    "correctAnswer": [0]
  },
  {
    "question": "NFV virtualizes which of the following?",
    "options": ["Physical antennas", "RAN spectrum", "Network functions", "UE mobility"],
    "explanation": "NFV virtualizes network functions using software running on cloud servers.",
    "correctAnswer": [2]
  },
  {
    "question": "Which protocol interface does SBA primarily use?",
    "options": ["HTTP/2 APIs", "GTP-U", "SCTP signaling", "UDP-only communication"],
    "explanation": "SBA uses service-based interfaces running over HTTP/2.",
    "correctAnswer": [0]
  },
  {
    "question": "Which 5G RAN interface connects UE to gNodeB?",
    "options": ["NG-C", "NR-Uu", "Xn", "N32"],
    "explanation": "NR-Uu is the 5G air interface between UE and gNB.",
    "correctAnswer": [1]
  },
  {
    "question": "Which technology makes mmWave practical despite high path loss?",
    "options": ["Low-order modulation", "Massive MIMO + Beamforming", "High tower placement", "LTE fallback"],
    "explanation": "Massive MIMO and beamforming focus signals to compensate path loss.",
    "correctAnswer": [1]
  },
    {
    "question": "Which 5G feature is crucial for autonomous vehicles?",
    "options": ["High throughput", "Low latency", "High bandwidth", "Long range"],
    "explanation": "Autonomous vehicles require ultra-low latency from URLLC.",
    "correctAnswer": [1]
  },
  {
    "question": "Which 5G security mechanism hides SUPI before transmission?",
    "options": ["SEPP", "SUCI", "SBA", "PCF"],
    "explanation": "SUCI is the encrypted form of SUPI sent over the air interface.",
    "correctAnswer": [1]
  },
  {
    "question": "Which component ensures secure inter-operator signaling?",
    "options": ["AMF", "UPF", "SEPP", "AUSF"],
    "explanation": "SEPP secures network-to-network roaming traffic.",
    "correctAnswer": [2]
  },
  {
    "question": "AI-native networks are expected in which generation?",
    "options": ["4G", "5G", "6G", "3G"],
    "explanation": "6G will integrate AI deeply into network operations.",
    "correctAnswer": [2]
  },
  {
    "question": "Terahertz communication lies in which approximate frequency range?",
    "options": ["1–10 GHz", "10–30 GHz", "0.1–10 THz", "100–300 MHz"],
    "explanation": "THz communication spans 0.1 to 10 THz.",
    "correctAnswer": [2]
  }

    ],
     module6: [
  {
    "question": "Which IMT-2020 category enables high-speed applications like 4K/8K video streaming?",
    "options": ["eMBB", "URLLC", "mMTC", "IMS"],
    "explanation": "eMBB supports enhanced mobile broadband for high data rate applications such as UHD streaming.",
    "correctAnswer": [0]
  },
  {
    "question": "Which KPI of 5G aims for latency as low as 1 ms?",
    "options": ["Speed", "Mobility", "Latency", "Energy efficiency"],
    "explanation": "URLLC aims to achieve ultra-low latency of up to 1 ms.",
    "correctAnswer": [2]
  },
  {
    "question": "Which 5G use case supports factory automation and robotics?",
    "options": ["eMBB", "URLLC", "mMTC", "FWA"],
    "explanation": "URLLC supports ultra-reliable and low latency communication required for industrial automation.",
    "correctAnswer": [1]
  },
  {
    "question": "Which use case requires connecting 1 million devices per km²?",
    "options": ["eMBB", "URLLC", "mMTC", "IMS"],
    "explanation": "mMTC is designed for massive connectivity for IoT devices.",
    "correctAnswer": [2]
  },
  {
    "question": "Which 5G KPI refers to improved energy consumption?",
    "options": ["Energy efficiency", "Reliability", "Speed", "Mobility"],
    "explanation": "Energy efficiency aims for 10× improvement over 4G.",
    "correctAnswer": [0]
  },
  {
    "question": "Which feature of eMBB is most beneficial for AR/VR applications?",
    "options": ["High capacity", "High reliability", "Massive connectivity", "Long battery life"],
    "explanation": "High capacity and high data rates enable smooth AR/VR streaming.",
    "correctAnswer": [0]
  },
  {
    "question": "What reliability level does URLLC aim to achieve?",
    "options": ["99%", "99.9%", "99.99%", "99.999%"],
    "explanation": "URLLC requires five-nines reliability for mission-critical operations.",
    "correctAnswer": [3]
  },
  {
    "question": "Smart meters and environment sensors fall under which 5G category?",
    "options": ["eMBB", "URLLC", "mMTC", "mmWave"],
    "explanation": "mMTC supports low-data, long-battery IoT devices.",
    "correctAnswer": [2]
  },
  {
    "question": "Which architecture principle in 5G allows network functions to scale independently?",
    "options": ["CUPS", "SBA", "FDMA", "TDMA"],
    "explanation": "SBA enables microservice architecture allowing independent scaling.",
    "correctAnswer": [1]
  },
  {
    "question": "Which function handles UE registration in 5G?",
    "options": ["SMF", "UPF", "AMF", "PCF"],
    "explanation": "AMF manages registration, authentication, and mobility.",
    "correctAnswer": [2]
  },
  {
    "question": "Which function assigns IP addresses to UE in 5G?",
    "options": ["AMF", "SMF", "UPF", "PCF"],
    "explanation": "SMF manages PDU sessions and allocates IP addresses.",
    "correctAnswer": [1]
  },
  {
    "question": "Which component handles user data forwarding in 5G?",
    "options": ["AMF", "SMF", "PCF", "UPF"],
    "explanation": "UPF handles user plane traffic and routes data.",
    "correctAnswer": [3]
  },
  {
    "question": "NG-C interface connects gNB with which 5G Core function?",
    "options": ["SMF", "UPF", "AMF", "UDM"],
    "explanation": "NG-C carries control plane signaling between gNB and AMF.",
    "correctAnswer": [2]
  },
  {
    "question": "Which deployment uses LTE EPC for control plane?",
    "options": ["SA", "NSA", "Both", "Neither"],
    "explanation": "NSA relies on LTE EPC for control while using 5G NR for user data.",
    "correctAnswer": [1]
  },
  {
    "question": "Which deployment fully supports network slicing?",
    "options": ["NSA", "SA", "LTE-A", "NB-IoT"],
    "explanation": "SA (Standalone) uses full 5G Core enabling slicing.",
    "correctAnswer": [1]
  },
  {
    "question": "Massive MIMO improves system capacity using:",
    "options": ["Wide antennas", "Spatial multiplexing", "Low power", "Single beam"],
    "explanation": "Spatial multiplexing enables multiple streams on same spectrum.",
    "correctAnswer": [1]
  },
  {
    "question": "What is the purpose of beamforming?",
    "options": ["Reduce bandwidth", "Increase latency", "Focus signal direction", "Randomize signals"],
    "explanation": "Beamforming directs radio waves towards target users.",
    "correctAnswer": [2]
  },
  {
    "question": "Which beamforming method allows generating multiple beams using DSP?",
    "options": ["Analog", "Digital", "Hybrid", "Static"],
    "explanation": "Digital beamforming uses DSP for complex beam patterns.",
    "correctAnswer": [1]
  },
  {
    "question": "mmWave typically operates above which frequency?",
    "options": ["1 GHz", "6 GHz", "24 GHz", "100 MHz"],
    "explanation": "mmWave bands begin around 24 GHz and above.",
    "correctAnswer": [2]
  },
  {
    "question": "Which technology reduces latency by processing data near the user?",
    "options": ["Cloud computing", "Edge computing", "Beamforming", "CUPS"],
    "explanation": "Edge computing processes data near base stations to cut latency.",
    "correctAnswer": [1]
  },

]
,
   
    module7: [
  {
    "question": "Which 5G Core function is responsible for policy decisions and QoS control?",
    "options": ["PCF", "AMF", "UPF", "NSSF"],
    "explanation": "PCF handles policy rules, QoS control, and charging decisions in 5G Core.",
    "correctAnswer": [0]
  },
  {
    "question": "In 5G, the separation of control plane and user plane is enabled by:",
    "options": ["NFV", "CUPS", "SBA", "SDN"],
    "explanation": "CUPS separates the control and user planes for flexible deployment.",
    "correctAnswer": [1]
  },
  {
    "question": "Which 5G Core function is responsible for selecting appropriate network slices for a UE?",
    "options": ["UDM", "NSSF", "PCF", "SMF"],
    "explanation": "NSSF handles network slice selection according to policies and subscription.",
    "correctAnswer": [1]
  },
  {
    "question": "Which interface carries user-plane traffic between gNB and UPF?",
    "options": ["NG-C", "NG-U", "Xn", "Uu"],
    "explanation": "NG-U is the user plane interface linking gNB and UPF.",
    "correctAnswer": [1]
  },
  {
    "question": "Which of the following is a benefit of 5G Standalone (SA) architecture?",
    "options": ["Lower cost than NSA", "Full support for URLLC", "Depends on LTE EPC", "Faster deployment"],
    "explanation": "SA provides full URLLC and slicing capabilities with a complete 5G Core.",
    "correctAnswer": [1]
  },
  {
    "question": "Dual connectivity between LTE eNodeB and 5G gNodeB is a feature of:",
    "options": ["SA", "NSA", "LTE-A", "MEC"],
    "explanation": "NSA uses dual connectivity where LTE anchors control plane and NR handles data.",
    "correctAnswer": [1]
  },
  {
    "question": "Which antenna technique in 5G improves coverage and reduces interference by directing radio beams?",
    "options": ["MIMO", "Beamforming", "Edge caching", "Frequency hopping"],
    "explanation": "Beamforming directs signals to users improving signal quality.",
    "correctAnswer": [1]
  },
  {
    "question": "Which beamforming type combines digital flexibility with analog efficiency?",
    "options": ["Hybrid", "Static", "Full digital", "Full analog"],
    "explanation": "Hybrid beamforming balances performance and power consumption.",
    "correctAnswer": [0]
  },
  {
    "question": "Which is a major limitation of mmWave communication?",
    "options": ["High bandwidth", "Long range", "Poor penetration through obstacles", "Low data rate"],
    "explanation": "mmWave struggles with penetration and range due to high frequency.",
    "correctAnswer": [2]
  },
  {
    "question": "Which technology enables real-time decision-making by reducing data travel distance?",
    "options": ["Network slicing", "Edge computing", "UPF routing", "Massive MIMO"],
    "explanation": "Edge computing processes data close to users to minimize latency.",
    "correctAnswer": [1]
  },
  {
    "question": "Which 5G KPI defines the maximum number of devices supported per km²?",
    "options": ["Mobility", "Reliability", "Connection density", "Spectral efficiency"],
    "explanation": "Connection density measures how many devices the network can handle.",
    "correctAnswer": [2]
  },
  {
    "question": "A key characteristic of mMTC traffic is:",
    "options": ["High throughput", "Frequent data transfer", "Low power and infrequent transmission", "Ultra-low latency"],
    "explanation": "mMTC devices send small, infrequent packets with long battery life.",
    "correctAnswer": [2]
  },
  {
    "question": "Which component stores subscriber profiles in 5G?",
    "options": ["AMF", "UDM", "UPF", "SMF"],
    "explanation": "UDM manages subscriber information and profiles.",
    "correctAnswer": [1]
  },
  {
    "question": "The encrypted version of SUPI used to protect user identity is called:",
    "options": ["SEPP", "SUCI", "GUTI", "NAS-ID"],
    "explanation": "SUCI encrypts the SUPI to protect identity on air interface.",
    "correctAnswer": [1]
  },
  {
    "question": "Which 5G Core function performs user authentication?",
    "options": ["AMF", "UPF", "AUSF", "NSSF"],
    "explanation": "AUSF handles authentication procedures with AMF assistance.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following best describes Network Slicing?",
    "options": ["Improved spectral efficiency", "Creation of virtual networks for specific use cases", "Replacing fiber links", "Enhanced modulation"],
    "explanation": "Network slicing creates multiple logical networks over a shared infrastructure.",
    "correctAnswer": [1]
  },
  {
    "question": "Which deployment is necessary for full network slicing support?",
    "options": ["NSA", "SA", "LTE-A", "HSPA+"],
    "explanation": "SA architecture with 5G Core supports end-to-end slicing.",
    "correctAnswer": [1]
  },
  {
    "question": "Which feature of 5G ensures predictable timing for mission-critical applications?",
    "options": ["Deterministic communication", "Massive bandwidth", "Analog beamforming", "High mobility"],
    "explanation": "URLLC provides deterministic and reliable communication.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the primary reason for deploying UPF closer to users?",
    "options": ["Energy saving", "Reduced spectrum usage", "Lower latency", "Increased mobility"],
    "explanation": "Local UPFs minimize round-trip time for data, reducing latency.",
    "correctAnswer": [2]
  },
  {
    "question": "Which frequency band does THz communication explore?",
    "options": ["MHz range", "GHz range", "0.1–10 THz", "100–500 kHz"],
    "explanation": "Future 6G systems will use THz band from 0.1 to 10 THz.",
    "correctAnswer": [2]
  },

]
,
    assignment: [

  {
    "question": "Peak throughput is feature of:",
    "options": ["URLLC", "mMTC", "eMBB", "NFV"],
    "correctAnswer": [2],
    "explanation": "eMBB focuses on very high data rates and capacity, so peak throughput is its primary characteristic."
  },
  {
    "question": "“Logical data connection” refers to:",
    "options": ["PDU Session", "Access link", "Control tunnel", "IP Pairing"],
    "correctAnswer": [0],
    "explanation": "A PDU session represents a logical connection between the UE and a data network in 5G, similar to a bearer in LTE."
  },
  {
    "question": "What does SUPI represent?",
    "options": ["Temporary ID", "Permanent ID", "Encrypted ID", "Security proxy"],
    "correctAnswer": [1],
    "explanation": "SUPI is the Subscription Permanent Identifier — the permanent subscriber identity used in 5G."
  },
  {
    "question": "SUCI is:",
    "options": ["Temporary identifier", "Plain SUPI", "Encrypted SUPI", "Radio tag"],
    "correctAnswer": [2],
    "explanation": "SUCI (Subscription Concealed Identifier) is the SUPI encrypted for transmission over the air to protect user privacy."
  },
  {
    "question": "Which protects signaling between operators?",
    "options": ["AMF", "SMF", "SEPP", "UPF"],
    "correctAnswer": [2],
    "explanation": "SEPP (Security Edge Protection Proxy) secures inter-operator signaling, e.g., on the N32 interface during roaming."
  },
  {
    "question": "Which core tech supports slicing?",
    "options": ["NFV", "CUPS", "SBA", "All"],
    "correctAnswer": [3],
    "explanation": "Network slicing is enabled by a combination of technologies — NFV (virtualization), CUPS (flexible planes) and SBA (service-based core) — so all are relevant."
  },
  {
    "question": "Which feature is used in smart cities?",
    "options": ["URLLC", "mMTC", "Massive MIMO", "mmWave"],
    "correctAnswer": [1],
    "explanation": "Smart city deployments rely heavily on mMTC to connect large numbers of low-power sensors and devices."
  },
  {
    "question": "Massive MIMO improves:",
    "options": ["Latency", "Energy", "Capacity", "Coding"],
    "correctAnswer": [2],
    "explanation": "Massive MIMO increases spectral efficiency and system capacity by serving many users with spatial multiplexing."
  },
  {
    "question": "Beam steering adjusts based on:",
    "options": ["Distance only", "Time slot", "User movement & channel", "Random direction"],
    "correctAnswer": [2],
    "explanation": "Beam steering uses channel estimates and user movement to adapt beam direction and maintain a good link."
  },
  {
    "question": "Architecture enabling flexibility & cloud deployment?",
    "options": ["Circuit-switched", "Service-based", "Star topology", "GSM"],
    "correctAnswer": [1],
    "explanation": "Service-Based Architecture (SBA) is cloud-native and modular, enabling flexible deployment and microservice-based NFs."
  },
  {
    "question": "Which optimizes scheduling for low latency?",
    "options": ["URLLC", "mMTC", "eMBB", "NSA"],
    "correctAnswer": [0],
    "explanation": "URLLC requires scheduling mechanisms (mini-slots, priority) optimized to achieve ultra-low latency."
  },
  {
    "question": "What enables multiple users simultaneously using same spectrum?",
    "options": ["Beamforming", "Spatial Multiplexing", "Edge Processing", "Antenna Switching"],
    "correctAnswer": [1],
    "explanation": "Spatial multiplexing lets the network send independent streams to different users over the same time-frequency resources."
  },
  {
    "question": "Which method authenticates users securely?",
    "options": ["5G-AKA", "Base64", "QR code", "AES-56"],
    "correctAnswer": [0],
    "explanation": "5G-AKA (and EAP-AKA') are standard authentication methods used in 5G for secure mutual authentication."
  },
  {
    "question": "Mobility during handover handled by:",
    "options": ["UPF", "AMF", "gNodeB only", "SDN"],
    "correctAnswer": [1],
    "explanation": "AMF is responsible for access and mobility management, coordinating handovers and tracking area updates."
  },
  {
    "question": "Which is NOT a role of UPF?",
    "options": ["Data forwarding", "Edge deployment", "Authentication", "QoS enforcement"],
    "correctAnswer": [2],
    "explanation": "UPF handles user-plane forwarding, QoS enforcement and can be deployed at the edge, but authentication is a control-plane function (AUSF/AMF)."
  },
  {
    "question": "Which enables native AI integration in 6G?",
    "options": ["AI-Native Networks", "Beamforming", "LTE-M", "OFDM"],
    "correctAnswer": [0],
    "explanation": "AI-native networks are a 6G vision where AI is integrated across the stack for autonomous optimization."
  },
  {
    "question": "Which enables ultra-high data speeds?",
    "options": ["mMTC", "mmWave", "NFV", "DRX"],
    "correctAnswer": [1],
    "explanation": "mmWave bands provide very wide bandwidths, enabling multi-Gbps data rates."
  },
  {
    "question": "Which technology helps reduce hardware reliance?",
    "options": ["NFV", "mmWave", "MIMO", "AMF"],
    "correctAnswer": [0],
    "explanation": "NFV implements network functions in software on standard servers, reducing dependence on specialized hardware."
  },
  {
    "question": "What is the function of Network Slicing?",
    "options": ["Splitting UE", "Creating virtual networks", "Splitting antennas", "Compressing packets"],
    "correctAnswer": [1],
    "explanation": "Network slicing creates multiple virtualized, isolated networks tailored to different service requirements."
  },
  {
    "question": "Which provides fast local computing?",
    "options": ["CSP", "MEC", "SDN", "FMN"],
    "correctAnswer": [1],
    "explanation": "Multi-access Edge Computing (MEC) brings computation close to users, enabling low-latency services."
  },
  {
    "question": "What supports dynamic scaling of services?",
    "options": ["AMF", "SBA", "UE", "NR"],
    "correctAnswer": [1],
    "explanation": "Service-Based Architecture (SBA) allows microservices to be scaled dynamically to meet demand."
  },
  {
    "question": "Which 5G core function assigns IP session?",
    "options": ["AMF", "SMF", "UPF", "AUSF"],
    "correctAnswer": [1],
    "explanation": "SMF manages PDU sessions and is responsible for IP address allocation for UEs."
  },
  {
    "question": "Which frequency band opens door to holographic communication?",
    "options": ["Sub-6 GHz", "mmWave", "Terahertz", "LTE-M"],
    "correctAnswer": [2],
    "explanation": "Terahertz (THz) bands promise extremely wide bandwidths that could support holographic and Tbps services in future 6G systems."
  },
  {
    "question": "Principle that reduces transmission overhead in mMTC?",
    "options": ["Spatial multiplexing", "Optimized signaling", "Beam steering", "Power boosting"],
    "correctAnswer": [1],
    "explanation": "Optimized signaling procedures reduce control overhead and energy consumption for massive, low-data IoT devices."
  },
  {
    "question": "Which plane handles actual data transport?",
    "options": ["Control plane", "User plane", "Logical plane", "Encryption plane"],
    "correctAnswer": [1],
    "explanation": "The user plane (handled by UPF in 5G) carries user traffic; the control plane handles signaling and session control."
  }

 ,
  {
    "question": "What is the peak data rate target of eMBB?",
    "options": ["1 Gbps", "20 Gbps", "10 Gbps", "100 Mbps"],
    "correctAnswer": [1],
    "explanation": "eMBB supports extremely high throughput, with IMT-2020 specifying 20 Gbps peak downlink."
  },
  {
    "question": "mMTC supports up to how many devices per km2?",
    "options": ["10,000", "100,000", "1 million", "1 billion"],
    "correctAnswer": [2],
    "explanation": "mMTC is designed for massive IoT, targeting up to 1 million devices per km²."
  },
  {
    "question": "URLLC aims for latency of:",
    "options": ["1 second", "10 ms", "≤ 1 ms", "5 ms"],
    "correctAnswer": [2],
    "explanation": "URLLC supports real-time mission-critical apps, so latency must be ≤1 ms."
  },
  {
    "question": "What is the reliability target of URLLC?",
    "options": ["90%", "95%", "99%", "99.999%"],
    "correctAnswer": [3],
    "explanation": "URLLC requires five-nines reliability (99.999%) for critical services."
  },
  {
    "question": "Which is not a 5G use case?",
    "options": ["eMBB", "URLLC", "mMTC", "VPN"],
    "correctAnswer": [3],
    "explanation": "VPN is not one of the 3 official 5G service categories."
  },
  {
    "question": "Which technology enables low-power device connectivity?",
    "options": ["Massive MIMO", "mMTC", "Beamforming", "Edge Computing"],
    "correctAnswer": [1],
    "explanation": "mMTC supports low-power IoT devices with long battery life."
  },
  {
    "question": "Which one uses dozens or hundreds of antennas?",
    "options": ["Massive MIMO", "CUPS", "MEC", "mmWave"],
    "correctAnswer": [0],
    "explanation": "Massive MIMO employs very large antenna arrays for higher capacity."
  },
  {
    "question": "What directs signals toward users?",
    "options": ["Modulation", "Coding", "Beamforming", "Multiplexing"],
    "correctAnswer": [2],
    "explanation": "Beamforming shapes RF beams in specific directions to improve SNR."
  },
  {
    "question": "What does SMF handle?",
    "options": ["Antenna control", "Session management", "Data transport", "Encryption"],
    "correctAnswer": [1],
    "explanation": "The SMF manages PDU sessions, IP allocation, and UPF control."
  },
  {
    "question": "UPF handles which task?",
    "options": ["UE registration", "MM handover", "User data flow", "Roaming authentication"],
    "correctAnswer": [2],
    "explanation": "UPF forwards user packets and applies QoS/routing rules."
  },
  {
    "question": "AMF is responsible for:",
    "options": ["PDU management", "UE registration & mobility", "Data forwarding", "Error correction"],
    "correctAnswer": [1],
    "explanation": "AMF manages access, registration, and mobility procedures."
  },
  {
    "question": "Which architecture relies on LTE EPC?",
    "options": ["SA", "NSA", "Hybrid", "Centralized"],
    "correctAnswer": [1],
    "explanation": "NSA uses LTE EPC for control-plane anchoring."
  },
  {
    "question": "The antenna technique improving spectrum efficiency is:",
    "options": ["OFDM", "Beamforming", "Massive MIMO", "MCS"],
    "correctAnswer": [2],
    "explanation": "Massive MIMO increases spectral efficiency by spatial multiplexing."
  },
  {
    "question": "Which is used for mission-critical low latency apps?",
    "options": ["eMBB", "URLLC", "mMTC", "SDN"],
    "correctAnswer": [1],
    "explanation": "URLLC enables ultra-low latency and high reliability services."
  },
  {
    "question": "What does CUPS separate?",
    "options": ["Hardware and software", "Signal and encryption", "Control plane and user plane", "Antennas and processors"],
    "correctAnswer": [2],
    "explanation": "CUPS decouples CP and UP for flexible scaling."
  },
  {
    "question": "What does SBA stand for?",
    "options": ["Software Band Allocation", "Service-Based Architecture", "Spectrum-Based Access", "Secure Bandwidth Analysis"],
    "correctAnswer": [1],
    "explanation": "5G Core is built on SBA using microservice-based functions."
  },
  {
    "question": "SBA uses which protocol?",
    "options": ["FTP", "SSH", "HTTP/2", "ARP"],
    "correctAnswer": [2],
    "explanation": "SBA functions communicate via HTTP/2 and REST APIs."
  },
  {
    "question": "Which communication type does not require low latency?",
    "options": ["mMTC", "URLLC", "VR streaming", "Autonomous driving"],
    "correctAnswer": [0],
    "explanation": "mMTC devices send small, delay-tolerant IoT data."
  },
  {
    "question": "Which uses dual connectivity (LTE+NR)?",
    "options": ["SA", "NSA", "mMTC", "NFV"],
    "correctAnswer": [1],
    "explanation": "NSA combines LTE and NR through dual connectivity."
  },
  {
    "question": "Which technology reduces latency by processing locally?",
    "options": ["Beamforming", "Cloud Computing", "Edge Computing", "Data Compression"],
    "correctAnswer": [2],
    "explanation": "Edge computing moves data processing closer to the UE."
  },
  {
    "question": "What does MEC stand for?",
    "options": ["Modular Edge Control", "Multi-access Edge Computing", "Mobile Equipment Communication", "Mission Edge Connection"],
    "correctAnswer": [1],
    "explanation": "MEC enables computation at the network edge."
  },
  {
    "question": "mmWave operates above:",
    "options": ["3 GHz", "6 GHz", "24 GHz", "1 THz"],
    "correctAnswer": [2],
    "explanation": "mmWave is defined as frequencies above 24 GHz."
  },
  {
    "question": "Typical mmWave wavelength is:",
    "options": ["10–100 cm", "1–10 mm", "1–10 m", "100–1000 nm"],
    "correctAnswer": [1],
    "explanation": "mmWave wavelengths fall between 1–10 mm."
  },
  {
    "question": "Role of gNodeB is:",
    "options": ["UE authentication", "Cloud management", "Radio resource handling", "Packet encryption"],
    "correctAnswer": [2],
    "explanation": "gNodeB manages NR radio communication and resources."
  },
  {
    "question": "Non-critical delay is okay in:",
    "options": ["URLLC", "mMTC", "AR/VR", "Remote surgery"],
    "correctAnswer": [1],
    "explanation": "mMTC traffic is not time-sensitive and tolerates delays."
  },
   {
    "question": "Which latency requirement is typical for URLLC services in 5G?",
    "options": ["50 ms", "20 ms", "1 ms", "100 ms"],
    "explanation": "URLLC targets extremely low end-to-end latency around 1 ms.",
    "correctAnswer": [2]
  },
  {
    "question": "Which 5G architecture component manages NAS signaling with the UE?",
    "options": ["UPF", "AMF", "SMF", "PCF"],
    "explanation": "AMF is responsible for NAS signaling and mobility management.",
    "correctAnswer": [1]
  },
  {
    "question": "Which feature allows 5G to support diverse services like IoT, URLLC, and eMBB simultaneously?",
    "options": ["Beam steering", "Network slicing", "Carrier aggregation", "Spectrum refarming"],
    "explanation": "Network slicing creates isolated logical networks for different services.",
    "correctAnswer": [1]
  },
  {
    "question": "Which technology provides ultra-high data rates but suffers from short range?",
    "options": ["mmWave", "Sub-6 GHz", "Wi-Fi 6", "NB-IoT"],
    "explanation": "mmWave delivers multi-Gbps speeds but has limited coverage.",
    "correctAnswer": [0]
  },
  {
    "question": "What is the main challenge of Terahertz (THz) communication?",
    "options": ["Low bandwidth", "Severe atmospheric attenuation", "Poor mobility", "Spectrum unavailability"],
    "explanation": "THz signals face extremely high attenuation due to molecular absorption.",
    "correctAnswer": [1]
  },
  {
    "question": "Which function in 5G handles subscriber authentication keys?",
    "options": ["AUSF", "AMF", "UPF", "NSSF"],
    "explanation": "AUSF authenticates the user and derives security keys.",
    "correctAnswer": [0]
  },
  {
    "question": "Which gNB interface supports handover signaling between base stations?",
    "options": ["NG-U", "NG-C", "Xn", "NR-Uu"],
    "explanation": "Xn interface connects gNBs for handovers and load sharing.",
    "correctAnswer": [2]
  },
  {
    "question": "Which 5G Core function ensures the correct slice is chosen for a user?",
    "options": ["SMF", "UDM", "NSSF", "PCF"],
    "explanation": "NSSF selects and assigns appropriate network slices.",
    "correctAnswer": [2]
  },
  {
    "question": "Which feature of mMTC helps ensure long battery life?",
    "options": ["High bandwidth", "Low power consumption", "Fast modulation", "High mobility"],
    "explanation": "mMTC devices use low power and infrequent data transmission.",
    "correctAnswer": [1]
  },
  {
    "question": "Which component in the 5G Core routes user data packets?",
    "options": ["SMF", "PCF", "UPF", "AUSF"],
    "explanation": "UPF is the user-plane anchor for data forwarding.",
    "correctAnswer": [2]
  },
  {
    "question": "Which statement correctly describes SDN in 5G?",
    "options": ["Control plane is hardware-based", "Data plane is software virtualized", "Control logic is centralized", "No separation of planes"],
    "explanation": "SDN centralizes control logic for programmability.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following enables virtualization of networking functions?",
    "options": ["Massive MIMO", "NFV", "Beamforming", "HARQ"],
    "explanation": "NFV virtualizes network services like firewalls and gateways.",
    "correctAnswer": [1]
  },
  {
    "question": "Which identity protection mechanism prevents SUPI exposure over air?",
    "options": ["SEPP", "SUCI", "GUTI", "NAS-Enc"],
    "explanation": "SUCI hides SUPI using public key encryption.",
    "correctAnswer": [1]
  },
  {
    "question": "Which deployment architecture depends heavily on LTE EPC?",
    "options": ["SA", "NSA", "6G", "IMS-only"],
    "explanation": "NSA uses LTE EPC and eNodeB for control plane activities.",
    "correctAnswer": [1]
  },
  {
    "question": "In 5G NR, beamforming improves system performance primarily by:",
    "options": ["Increasing noise", "Directing energy toward users", "Reducing antennas", "Lowering bandwidth"],
    "explanation": "Beamforming focuses signal beams toward specific UEs.",
    "correctAnswer": [1]
  },
  {
    "question": "Which element is part of the Control Plane in 5G?",
    "options": ["UPF", "SMF", "DN", "UE"],
    "explanation": "SMF belongs to the control plane responsible for session management.",
    "correctAnswer": [1]
  },
  {
    "question": "PDU Session in 5G corresponds to which concept from 4G LTE?",
    "options": ["Physical channel", "Bearer", "Resource block", "APN"],
    "explanation": "A PDU session is equivalent to a bearer in LTE.",
    "correctAnswer": [1]
  },
  {
    "question": "Which 5G concept allows separate logical networks for emergency, IoT, or public broadband?",
    "options": ["Beam steering", "Network slicing", "HARQ", "Carrier aggregation"],
    "explanation": "Slicing enables multi-service coexistence on same infrastructure.",
    "correctAnswer": [1]
  },
  {
    "question": "Which type of beamforming uses phase shifters and is hardware-efficient?",
    "options": ["Digital", "Analog", "Hybrid", "Massive"],
    "explanation": "Analog beamforming uses phase shifters in RF domain.",
    "correctAnswer": [1]
  },
  {
    "question": "Which factor limits mmWave coverage?",
    "options": ["High diffraction", "High path loss", "Low bandwidth", "Low frequency"],
    "explanation": "mmWave frequencies experience excessive path loss and weak penetration.",
    "correctAnswer": [1]
  },
  {
    "question": "Which feature makes 5G suitable for high-speed trains (up to 500 km/h)?",
    "options": ["High reliability", "High mobility support", "Wide coverage", "Massive bandwidth"],
    "explanation": "5G supports high mobility as a KPI.",
    "correctAnswer": [1]
  },
  {
    "question": "Which component protects signaling traffic between two operators?",
    "options": ["SEPP", "AUSF", "UDM", "NGAP"],
    "explanation": "SEPP secures N32 interface between operators.",
    "correctAnswer": [0]
  },
  {
    "question": "Which is a benefit of CUPS in 5G?",
    "options": ["Higher power consumption", "Poor scaling", "Independent scaling of CP and UP", "Reduced security"],
    "explanation": "CUPS allows UPF and SMF to scale independently.",
    "correctAnswer": [2]
  },
  {
    "question": "Edge computing supports low-latency applications by:",
    "options": ["Moving servers far away", "Processing data at the core network", "Processing data near the user", "Reducing modulation order"],
    "explanation": "Edge computing reduces latency by minimizing data travel distance.",
    "correctAnswer": [2]
  },
  {
    "question": "Which future technology promises ultra-secure communication using QKD?",
    "options": ["mmWave", "AI-native networks", "Quantum communication", "HARQ"],
    "explanation": "Quantum communication uses QKD for secure key exchange.",
    "correctAnswer": [2]
  },
  
  {
    "question": "Which 5G frequency range offers better coverage but lower peak speed?",
    "options": ["mmWave", "THz", "Sub-6 GHz", "Visible light spectrum"],
    "explanation": "Sub-6 GHz bands provide large coverage areas with moderate speeds.",
    "correctAnswer": [2]
  },
  {
    "question": "Which 5G Core function provides unified data storage for subscriber profiles?",
    "options": ["NSSF", "UDM", "AMF", "UPF"],
    "explanation": "UDM stores user subscription, authentication info, and policy data.",
    "correctAnswer": [1]
  },
  {
    "question": "Which is a benefit of SBA in 5G Core?",
    "options": ["Hardware-defined network", "Rigid network functions", "Flexible microservices", "No API support"],
    "explanation": "SBA uses microservices communicating via APIs, offering flexibility.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following is NOT an IMT-2020 5G requirement?",
    "options": ["1 ms latency", "20 Gbps peak data rate", "1 million devices/km²", "Unlimited range communication"],
    "explanation": "Unlimited range is not part of 5G KPIs.",
    "correctAnswer": [3]
  },
  {
    "question": "Which 5G feature enables dedicated virtual networks for critical services?",
    "options": ["Massive MIMO", "mmWave", "Network slicing", "Carrier aggregation"],
    "explanation": "Network slicing isolates resources for different applications.",
    "correctAnswer": [2]
  },
  {
    "question": "In 5G, who assigns QoS and charging rules?",
    "options": ["AMF", "UPF", "PCF", "UDM"],
    "explanation": "PCF determines QoS and charging policies.",
    "correctAnswer": [2]
  },
  {
    "question": "mmWave communication mainly suffers from:",
    "options": ["High interference immunity", "Long range", "High penetration capability", "High free-space path loss"],
    "explanation": "mmWave struggles with high path loss, requiring dense deployment.",
    "correctAnswer": [3]
  },
  {
    "question": "Which 5G capability enables immersive VR experiences?",
    "options": ["URLLC", "eMBB", "mMTC", "NB-IoT"],
    "explanation": "eMBB provides high throughput needed for VR/AR.",
    "correctAnswer": [1]
  },
  {
    "question": "Which is the main transport protocol used in SBA architecture?",
    "options": ["GTP", "HTTP/2", "FTP", "SSH"],
    "explanation": "SBA uses REST APIs over HTTP/2.",
    "correctAnswer": [1]
  },
  {
    "question": "Which new identifier protects UE privacy in 5G?",
    "options": ["GUTI", "SUPI", "SUCI", "IMSI"],
    "explanation": "SUCI is encrypted and protects SUPI from exposure.",
    "correctAnswer": [2]
  },
  {
    "question": "Which function instructs UPF regarding routing and forwarding rules?",
    "options": ["PCF", "AMF", "SMF", "AUSF"],
    "explanation": "SMF configures UPF for traffic routing and QoS.",
    "correctAnswer": [2]
  },
  {
    "question": "Which of the following best describes Massive MIMO?",
    "options": ["Few antennas with high power", "Many antennas for spatial multiplexing", "Single antenna beam steering", "Digital modulation improvement"],
    "explanation": "Massive MIMO uses many antennas to create multiple simultaneous streams.",
    "correctAnswer": [1]
  },
  {
    "question": "Which interface replaces LTE’s S1 interface in 5G?",
    "options": ["NR-Uu", "NG interface", "N32", "Xn"],
    "explanation": "NG-C and NG-U together replace LTE S1 interface.",
    "correctAnswer": [1]
  },
  {
    "question": "Which 5G feature is essential for industrial robots and AGVs?",
    "options": ["eMBB", "mMTC", "URLLC", "Carrier Aggregation"],
    "explanation": "URLLC ensures real-time, reliable communication.",
    "correctAnswer": [2]
  },
  {
    "question": "Which layer of 5G enables smart cities and massive IoT deployment?",
    "options": ["URLLC", "eMBB", "mMTC", "IMS"],
    "explanation": "mMTC supports millions of IoT sensors and devices.",
    "correctAnswer": [2]
  },
  {
    "question": "Which RAN interface carries user-plane traffic?",
    "options": ["Xn", "NR-Uu", "NG-U", "NG-C"],
    "explanation": "NG-U transports user data between gNB and UPF.",
    "correctAnswer": [2]
  },
  {
    "question": "Which future 6G concept uses AI to optimize network functions automatically?",
    "options": ["Massive MIMO", "AI-native networks", "mmWave", "SEPP"],
    "explanation": "6G envisions AI-integrated autonomous network management.",
    "correctAnswer": [1]
  },
  {
    "question": "Which mechanism secures inter-operator 5G roaming communication?",
    "options": ["NSSF", "SMF", "SEPP", "UPF"],
    "explanation": "SEPP secures signaling between operators on N32.",
    "correctAnswer": [2]
  },
  {
    "question": "Which 5G component performs packet inspection and QoS enforcement?",
    "options": ["AMF", "UPF", "PCF", "UDM"],
    "explanation": "UPF enforces QoS rules and forwards packets.",
    "correctAnswer": [1]
  },
  {
    "question": "Which is a limitation of hybrid beamforming?",
    "options": ["High power consumption", "Lower flexibility than full digital beamforming", "Requires no phase shifters", "Does not support MIMO"],
    "explanation": "Hybrid beamforming trades flexibility for efficiency.",
    "correctAnswer": [1]
  },
  {
    "question": "Which 5G deployment is more expensive but enables full 5G functionality?",
    "options": ["NSA", "SA", "LTE-A", "Dual Connectivity"],
    "explanation": "SA needs new 5G Core deployment, allowing advanced features.",
    "correctAnswer": [1]
  },
  {
    "question": "Which KPI measures the ability of 5G to support high-speed mobility like trains?",
    "options": ["Mobility", "Latency", "Spectrum efficiency", "Energy efficiency"],
    "explanation": "Mobility KPI ensures connectivity at speeds up to 500 km/h.",
    "correctAnswer": [0]
  },
  {
    "question": "Which of the following is a key advantage of NFV in 5G?",
    "options": ["Mandatory new hardware", "High deployment cost", "Rapid service deployment using software", "Increased latency"],
    "explanation": "NFV enables software-based VNFs for faster deployment.",
    "correctAnswer": [2]
  },
  {
    "question": "Which concept allows THz communication to support Tbps data rates?",
    "options": ["Large wavelengths", "Wide available bandwidth", "Low path loss", "Carrier aggregation"],
    "explanation": "THz bands offer extremely wide bandwidth enabling ultra-high speeds.",
    "correctAnswer": [1]
  },
  {
    "question": "Which 5G technology helps overcome mmWave range limitations?",
    "options": ["Small cells", "Low-order modulation", "Long antennas", "High transmit power only"],
    "explanation": "Dense deployment of small cells compensates for mmWave short range.",
    "correctAnswer": [0]
  }


]
,
    passage_based_questions: {
        
  "passage_1": {
    "title": "5G Network Slicing Fundamentals",
    "passage": "5G network slicing allows operators to divide a physical network into multiple virtual networks. Each slice can be customized for specific requirements such as latency, bandwidth, and reliability. For example, IoT devices may use a low-power slice, while autonomous vehicles require an ultra-low-latency slice. Network slicing uses technologies like virtualization, SDN, and NFV to dynamically assign resources.",
    "questions": [
      {
        "question": "What does network slicing primarily enable?",
        "options": ["Virtual networks", "Higher transmit power", "Longer range", "Faster antennas"],
        "explanation": "Network slicing creates multiple virtual networks using the same physical infrastructure.",
        "correctAnswer": [0]
      },
      {
        "question": "Which technology helps in implementing slices dynamically?",
        "options": ["PWM", "NFV", "TDM", "PCM"],
        "explanation": "NFV virtualizes network functions enabling dynamic slice assignment.",
        "correctAnswer": [1]
      },
      {
        "question": "Which application needs ultra-low latency slices?",
        "options": ["Smart meters", "Autonomous vehicles", "Email services", "SMS"],
        "explanation": "Autonomous vehicles require near-instant communication.",
        "correctAnswer": [1]
      },
      {
        "question": "Which component customizes bandwidth and reliability?",
        "options": ["Network slice", "Amplifier", "Modulator", "Transceiver"],
        "explanation": "Slices allocate customized resources like bandwidth and reliability.",
        "correctAnswer": [0]
      },
      {
        "question": "What kind of slice is preferred for IoT sensors?",
        "options": ["High-latency", "Low-power", "High-speed", "High-mobility"],
        "explanation": "IoT typically uses low-power, low-data-rate slices.",
        "correctAnswer": [1]
      },


  

    ]
  },

  "passage_2": {
    "title": "Massive MIMO in 5G",
    "passage": "Massive MIMO uses a large number of antennas at the base station to transmit multiple data streams simultaneously. It improves capacity, coverage, and spectral efficiency. Massive MIMO works closely with beamforming to direct signals precisely. Due to spatial multiplexing, multiple users can share the same frequency resources with minimal interference.",
    "questions": [
      {
        "question": "What does Massive MIMO primarily improve?",
        "options": ["Spectral efficiency", "Battery life", "Call charges", "IP addressing"],
        "explanation": "Massive MIMO enhances spectral efficiency by enabling multiple simultaneous streams.",
        "correctAnswer": [0]
      },
      {
        "question": "Which concept enables serving multiple users at once?",
        "options": ["Sampling", "Multiplexing", "Quantization", "Encryption"],
        "explanation": "Spatial multiplexing allows simultaneous transmission to multiple users.",
        "correctAnswer": [1]
      },
      {
        "question": "Which technique complements Massive MIMO?",
        "options": ["AM", "Beamforming", "PPM", "ASK"],
        "explanation": "Beamforming directs signal beams and reduces interference.",
        "correctAnswer": [1]
      },
      {
        "question": "Why does Massive MIMO require many antennas?",
        "options": ["To reduce power bills", "To increase spatial streams", "To increase frequency", "To decrease modulation"],
        "explanation": "More antennas produce more independent spatial streams.",
        "correctAnswer": [1]
      },
      {
        "question": "What type of interference does Massive MIMO reduce?",
        "options": ["Cross modulation", "Inter-user interference", "Thermal noise", "AC noise"],
        "explanation": "Beamforming helps reduce interference among users sharing spectrum.",
        "correctAnswer": [1]
      }
    ]
  }
,

  "passage_3": {
    "title": "Pulse Shaping and ISI Reduction",
    "passage": "Pulse shaping is used in digital communication to minimize inter-symbol interference (ISI). The most common pulse shaping filter is the raised cosine filter, which controls bandwidth and smooths transitions. Proper pulse shaping ensures that symbols do not overlap excessively, enabling accurate recovery at the receiver.",
    "questions": [
      {
        "question": "What does pulse shaping primarily reduce?",
        "options": ["Noise", "Inter-symbol interference", "Latency", "Power"],
        "explanation": "Pulse shaping reduces ISI to ensure clear signal recovery.",
        "correctAnswer": [1]
      },
      {
        "question": "Which filter is widely used for pulse shaping?",
        "options": ["Low pass", "Raised cosine", "Band-stop", "Notch filter"],
        "explanation": "Raised cosine is a standard pulse shaping filter.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is ISI harmful?",
        "options": ["It increases power", "It causes symbol overlap", "It reduces antenna size", "It increases sampling frequency"],
        "explanation": "Symbol overlap leads to incorrect demodulation.",
        "correctAnswer": [1]
      },
      {
        "question": "Pulse shaping also helps limit:",
        "options": ["Sampling rate", "Transmitted bandwidth", "Bit interval", "Carrier frequency"],
        "explanation": "Pulse shaping restricts occupied bandwidth.",
        "correctAnswer": [1]
      },
      {
        "question": "What ensures accurate symbol detection?",
        "options": ["Wide bandwidth", "Clean symbol boundaries", "High sampling rate", "Noise addition"],
        "explanation": "Clear symbol boundaries reduce interference.",
        "correctAnswer": [1]
      }
    ]
  }
,

  "passage_4": {
    "title": "5G Core Architecture Overview",
    "passage": "The 5G Core (5GC) is based on a cloud-native Service-Based Architecture (SBA). It consists of functions such as the AMF, SMF, UPF, and PCF. SBA enables scalability and modular upgrades. Control and user planes are separated, allowing UPF to be deployed closer to the edge for low latency applications.",
    "questions": [
      {
        "question": "What type of architecture does 5G Core use?",
        "options": ["Circuit-switched", "Service-based", "Analog", "Hybrid"],
        "explanation": "5GC adopts a Service-Based Architecture (SBA).",
        "correctAnswer": [1]
      },
      {
        "question": "Which function handles user data forwarding?",
        "options": ["AMF", "UPF", "PCF", "NSSF"],
        "explanation": "UPF manages the user plane and forwards packets.",
        "correctAnswer": [1]
      },
      {
        "question": "Which component manages session control?",
        "options": ["SMF", "UPF", "PCF", "AUSF"],
        "explanation": "SMF handles session establishment and IP allocation.",
        "correctAnswer": [0]
      },
      {
        "question": "Why is UPF placed near the edge?",
        "options": ["To reduce cost", "To reduce latency", "To increase mobility", "To increase coverage"],
        "explanation": "Edge placement minimizes packet travel distance.",
        "correctAnswer": [1]
      },
      {
        "question": "What does SBA enable?",
        "options": ["Fixed hardware", "Modular and scalable services", "Single monolithic core", "Constant bandwidth"],
        "explanation": "SBA favors modular upgrades and flexibility.",
        "correctAnswer": [1]
      }
    ]
  },

  "passage_5": {
    "title": "mmWave Propagation Characteristics",
    "passage": "Millimeter wave (mmWave) frequencies in 5G range above 24 GHz and provide extremely high data rates. However, their propagation is limited by high atmospheric attenuation and poor penetration through obstacles. To overcome range issues, 5G uses beamforming and dense small cell deployment.",
    "questions": [
      {
        "question": "What is a major disadvantage of mmWave?",
        "options": ["Low speed", "High penetration", "Short range", "Large wavelength"],
        "explanation": "mmWave signals attenuate quickly and have short range.",
        "correctAnswer": [2]
      },
      {
        "question": "Which technique improves mmWave coverage?",
        "options": ["AM", "Beamforming", "PCM", "PPM"],
        "explanation": "Beamforming focuses energy to improve range.",
        "correctAnswer": [1]
      },
      {
        "question": "Why does mmWave struggle with walls?",
        "options": ["High wavelength", "Low bandwidth", "Poor penetration", "High power"],
        "explanation": "High frequencies cannot penetrate obstacles effectively.",
        "correctAnswer": [2]
      },
      {
        "question": "What deployment strategy supports mmWave?",
        "options": ["Large macro cells", "Dense small cells", "Long-range antennas", "Single base station"],
        "explanation": "Small cells compensate for short coverage.",
        "correctAnswer": [1]
      },
      {
        "question": "mmWave offers:",
        "options": ["Low data rate", "High data rate", "No bandwidth", "Analog output"],
        "explanation": "mmWave provides multi-Gbps throughput due to wide bandwidth.",
        "correctAnswer": [1]
      }
    ]
  },
  
  "passage_6": {
    "title": "URLLC in Industrial Automation",
    "passage": "Ultra-Reliable Low Latency Communication (URLLC) provides extremely low latency and high reliability required for mission-critical applications. In industrial automation, robots and automated guided vehicles depend on instantaneous responses to avoid accidents. URLLC supports applications requiring 99.999% reliability and under 1 ms latency.",
    "questions": [
      {
        "question": "What reliability does URLLC target?",
        "options": ["80%", "90%", "99.9%", "99.999%"],
        "explanation": "URLLC offers five-nines reliability.",
        "correctAnswer": [3]
      },
      {
        "question": "Which application needs URLLC?",
        "options": ["Video streaming", "Smart lighting", "Industrial robots", "Email"],
        "explanation": "Factories require ultra-low latency for automation.",
        "correctAnswer": [2]
      },
      {
        "question": "Why is low latency needed?",
        "options": ["Reduce cost", "Increase coverage", "Enable real-time response", "Reduce bandwidth"],
        "explanation": "Real-time control requires fast feedback.",
        "correctAnswer": [2]
      },
      {
        "question": "What happens if latency increases?",
        "options": ["Robots move faster", "Higher collision risk", "Lower energy use", "Better accuracy"],
        "explanation": "Delayed communication increases accident risk.",
        "correctAnswer": [1]
      },
      {
        "question": "URLLC is most critical for:",
        "options": ["File downloads", "Entertainment", "Mission-critical operations", "Phone calls"],
        "explanation": "URLLC is designed for high-risk, real-time systems.",
        "correctAnswer": [2]
      }
    ]
  },

  "passage_7": {
    "title": "SUPI and SUCI in 5G Security",
    "passage": "The Subscription Permanent Identifier (SUPI) uniquely identifies a subscriber in 5G. To protect user privacy, SUPI is never transmitted directly. Instead, it is encrypted into SUCI using the operator’s public key. This prevents tracking and interception by attackers, making 5G more secure than previous generations.",
    "questions": [
      {
        "question": "What does SUPI represent?",
        "options": ["Base station ID", "User identity", "Frequency band", "Application ID"],
        "explanation": "SUPI is the permanent user identity in 5G.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is SUPI not transmitted directly?",
        "options": ["High power use", "Privacy concerns", "Bad modulation", "High bandwidth use"],
        "explanation": "Sending SUPI directly allows tracking; it must be protected.",
        "correctAnswer": [1]
      },
      {
        "question": "What is SUCI?",
        "options": ["Encrypted SUPI", "QoS value", "Session ID", "Network slice"],
        "explanation": "SUCI is the concealed identity derived from SUPI.",
        "correctAnswer": [0]
      },
      {
        "question": "Which key is used to encrypt SUPI?",
        "options": ["User key", "Private key", "Operator's public key", "AMF key"],
        "explanation": "Operator public key encrypts SUPI for privacy.",
        "correctAnswer": [2]
      },
      {
        "question": "What threat does SUCI prevent?",
        "options": ["Dropping packets", "Battery drain", "Identity tracking", "High latency"],
        "explanation": "SUCI prevents attackers from identifying and tracking users.",
        "correctAnswer": [2]
      }
    ]
  }
,

  "passage_8": {
    "title": "Edge Computing and Latency Reduction",
    "passage": "Edge computing processes user data close to the base station instead of sending it to a central cloud server. This significantly reduces end-to-end latency. Applications like AR/VR, autonomous driving, and industrial automation benefit from real-time computation provided by edge servers. It also reduces load on the core network.",
    "questions": [
      {
        "question": "Where is data processed in edge computing?",
        "options": ["Far cloud", "Local gateway", "Nearby edge server", "Only by UE"],
        "explanation": "Edge servers placed near users reduce processing time.",
        "correctAnswer": [2]
      },
      {
        "question": "Which application gains most from edge computing?",
        "options": ["Email", "AR/VR", "Text messaging", "Offline apps"],
        "explanation": "AR/VR requires real-time updates with ultra-low latency.",
        "correctAnswer": [1]
      },
      {
        "question": "Why does edge computing reduce latency?",
        "options": ["Shorter data travel distance", "Higher frequency", "More bandwidth", "More antennas"],
        "explanation": "Processing near the source reduces round-trip delays.",
        "correctAnswer": [0]
      },
      {
        "question": "What is an additional benefit of edge computing?",
        "options": ["Higher cost", "More core network load", "Reduced core network load", "Lower speed"],
        "explanation": "Edge offloads computation from the core.",
        "correctAnswer": [2]
      },
      {
        "question": "Which technology relies on edge for real-time decisions?",
        "options": ["AR/VR", "File transfer", "SMS", "Browsing"],
        "explanation": "Latency-sensitive AR/VR applications depend on edge servers.",
        "correctAnswer": [0]
      }
    ]
  }
,

  "passage_9": {
    "title": "mMTC and IoT Connectivity",
    "passage": "Massive Machine Type Communication (mMTC) allows 5G networks to support up to one million IoT devices per square kilometer. Devices send small amounts of data and operate at low power for long battery life. mMTC is essential for smart cities, agricultural monitoring, and industrial sensors.",
    "questions": [
      {
        "question": "What is the key feature of mMTC?",
        "options": ["High power devices", "Massive device connectivity", "High data rate", "High latency"],
        "explanation": "mMTC supports millions of IoT devices efficiently.",
        "correctAnswer": [1]
      },
      {
        "question": "Which application relies heavily on mMTC?",
        "options": ["Autonomous driving", "4K streaming", "Smart cities", "Gaming"],
        "explanation": "Smart cities depend on many IoT sensors.",
        "correctAnswer": [2]
      },
      {
        "question": "What is typical of mMTC data?",
        "options": ["Large packets", "Constant streaming", "Small infrequent packets", "High bandwidth"],
        "explanation": "IoT devices send small bursts occasionally.",
        "correctAnswer": [2]
      },
      {
        "question": "Why do mMTC devices need long battery life?",
        "options": ["Used in remote or unattended locations", "For gaming", "To increase speed", "To support video"],
        "explanation": "IoT sensors often operate without maintenance.",
        "correctAnswer": [0]
      },
      {
        "question": "mMTC supports up to:",
        "options": ["10 users/km²", "1000 devices/km²", "1 million devices/km²", "Unlimited devices"],
        "explanation": "5G mMTC supports 1 million devices per square kilometer.",
        "correctAnswer": [2]
      }
    ]
  }
,

  "passage_10": {
    "title": "OFDM in 5G Waveform Design",
    "passage": "Orthogonal Frequency Division Multiplexing (OFDM) is used in 5G as the primary modulation scheme. It divides the channel into many orthogonal subcarriers, reducing inter-symbol interference and improving robustness against frequency-selective fading. Cyclic prefix is added to mitigate multipath effects.",
    "questions": [
      {
        "question": "What does OFDM divide the channel into?",
        "options": ["One wideband carrier", "Multiple subcarriers", "Single pulse", "AM waves"],
        "explanation": "OFDM uses many narrowband orthogonal subcarriers.",
        "correctAnswer": [1]
      },
      {
        "question": "What does cyclic prefix reduce?",
        "options": ["Noise", "Multipath interference", "Bandwidth", "Transmit power"],
        "explanation": "Cyclic prefix combats multipath fading.",
        "correctAnswer": [1]
      },
      {
        "question": "Why is OFDM robust?",
        "options": ["Uses analog modulation", "Handles frequency fading well", "Uses narrow antennas", "Reduces symbol rate"],
        "explanation": "OFDM tolerates frequency-selective fading effectively.",
        "correctAnswer": [1]
      },
      {
        "question": "Which problem does OFDM reduce?",
        "options": ["Sampling issue", "Inter-symbol interference", "Antenna mismatch", "Carrier drift"],
        "explanation": "Subcarrier orthogonality minimizes ISI.",
        "correctAnswer": [1]
      },
      {
        "question": "OFDM is used as the:",
        "options": ["Backup modulation", "Primary 5G waveform", "Only for uplink", "Only for IoT"],
        "explanation": "OFDM is the main waveform used in both downlink and uplink.",
        "correctAnswer": [1]
      }
    ]
  }
,
"passage_11":{
   "title": "URLLC",
      "passage": "URLLC in 5G is designed for mission-critical operations where even minor delays can cause serious consequences. It targets extremely low latency (≤1 ms) and ultra-high reliability (99.999%). Applications include remote surgery, autonomous driving, and industrial automation.",
      "questions": [
        {
          "question": "What does URLLC stand for?",
          "options": [
            "Ultra-Reliable Low Latency Communication",
            "Universal Radio Link Layer Control",
            "User Resource Link Latency Channel",
            "Ultra-Range Low-Loss Communication"
          ],
          "correctAnswer": [0],
          "explanation": "URLLC stands for Ultra-Reliable Low Latency Communication, a key 5G service category."
        },
        {
          "question": "What latency target is set for URLLC?",
          "options": [
            "10 ms",
            "50 ms",
            "≤ 1 millisecond",
            "5 seconds"
          ],
          "correctAnswer": [2],
          "explanation": "URLLC requires extremely low latency, typically 1 ms or below."
        },
        {
          "question": "Why is high reliability important for URLLC?",
          "options": [
            "To support large video files",
            "Because failures can cause serious damage in mission-critical systems",
            "To save battery",
            "Because it improves download speed"
          ],
          "correctAnswer": [1],
          "explanation": "Mission-critical functions such as surgery and autonomous driving need near-zero failure."
        },
        {
          "question": "Which of the following is an application of URLLC?",
          "options": [
            "Remote surgery",
            "Social media browsing",
            "Email communication",
            "Offline gaming"
          ],
          "correctAnswer": [0],
          "explanation": "Remote surgery requires ultra-low latency and very high reliability, which URLLC provides."
        },
        {
          "question": "What reliability percentage does URLLC aim for?",
          "options": [
            "99%",
            "95%",
            "99.999%",
            "70%"
          ],
          "correctAnswer": [2],
          "explanation": "URLLC targets 'five-nines' reliability for mission-critical applications."
        }
      ]
},

"passages_12":{
      "title": "mMTC",
      "passage": "Massive Machine Type Communication (mMTC) focuses on connecting a massive number of small, low-power devices such as IoT sensors. It supports up to 1 million devices per km² with high energy efficiency, enabling battery life of 5–10 years. This is crucial for smart cities, agriculture, and healthcare monitoring.",
      "questions": [
        {
          "question": "What is the full form of mMTC?",
          "options": [
            "Massive Machine Type Communication",
            "Mobile Multi-Type Coding",
            "Mixed Mode Transmission Control",
            "Machine-to-Man Transmission Channel"
          ],
          "correctAnswer": [0],
          "explanation": "mMTC stands for Massive Machine Type Communication, a key 5G service category for IoT."
        },
        {
          "question": "How many devices per km² does mMTC support?",
          "options": [
            "1,000 devices",
            "10,000 devices",
            "100,000 devices",
            "1 million devices"
          ],
          "correctAnswer": [3],
          "explanation": "mMTC supports extremely dense IoT deployment, up to 1 million devices per square kilometer."
        },
        {
          "question": "What is the expected battery lifespan of devices in mMTC?",
          "options": [
            "1–2 years",
            "5–10 years",
            "20 years",
            "A few months"
          ],
          "correctAnswer": [1],
          "explanation": "mMTC devices are designed to be low-power and operate for 5–10 years."
        },
        {
          "question": "Which of the following is a practical application of mMTC?",
          "options": [
            "IoT sensors in agriculture",
            "4K video streaming",
            "VR gaming",
            "Remote surgery"
          ],
          "correctAnswer": [0],
          "explanation": "mMTC is ideal for applications like sensors in smart agriculture and smart cities."
        },
        {
          "question": "Why is energy efficiency important in mMTC?",
          "options": [
            "Because devices are battery-powered and operate long-term",
            "To increase download speed",
            "To reduce noise",
            "To support beamforming"
          ],
          "correctAnswer": [0],
          "explanation": "Most mMTC devices are battery powered and must last for years without replacement."
        }
      ]
    }
  
,
"passage_13": 
    {
      "title": "Massive MIMO",
      "passage": "Massive MIMO uses dozens or hundreds of antennas at gNodeBs to transmit multiple data streams through spatial multiplexing. This significantly improves network capacity and spectral efficiency while supporting simultaneous users. It is a key technology for high-speed 5G performance.",
      "questions": [
        {
          "question": "What does MIMO stand for?",
          "options": [
            "Multiple-Input Multiple-Output",
            "Multi-Input Multi-Organization",
            "Managed Intelligent Mobile Output",
            "Modulated Input Modulation Output"
          ],
          "correctAnswer": [0],
          "explanation": "MIMO stands for Multiple-Input Multiple-Output, referring to multiple transmit and receive antenna elements."
        },
        {
          "question": "What is the main benefit of spatial multiplexing?",
          "options": [
            "Reduces battery consumption",
            "Multiple data streams on the same frequency/time",
            "Simplifies antenna design",
            "Increases modulation order only"
          ],
          "correctAnswer": [1],
          "explanation": "Spatial multiplexing sends independent data streams to different users over the same time-frequency resources, boosting throughput."
        },
        {
          "question": "Where is Massive MIMO used?",
          "options": [
            "At user devices (UE)",
            "At gNodeB (5G base stations)",
            "Only in core network servers",
            "In satellite transponders"
          ],
          "correctAnswer": [1],
          "explanation": "Massive MIMO antenna arrays are deployed at base stations (gNodeBs) to serve many users simultaneously."
        },
        {
          "question": "How does Massive MIMO enhance performance?",
          "options": [
            "By increasing symbol duration",
            "By improving capacity and spectral efficiency",
            "By lowering carrier frequency",
            "By removing need for scheduling"
          ],
          "correctAnswer": [1],
          "explanation": "Massive MIMO increases capacity and spectral efficiency through spatial multiplexing and beamforming."
        },
        {
          "question": "How many antennas can be involved in Massive MIMO?",
          "options": [
            "1–2",
            "5–10",
            "Dozens to hundreds",
            "Thousands per UE"
          ],
          "correctAnswer": [2],
          "explanation": "Massive MIMO typically involves dozens to hundreds of antenna elements at the base station."
        }
      ]
    },

    "passage_14":
    {
      "title": "Edge Computing",
      "passage": "Edge computing processes data close to the user, near the gNodeB, instead of distant cloud servers. This reduces latency and enables real-time applications like AR/VR, autonomous cars, and industrial robotics. It minimizes core network load and uses MEC (Multi-access Edge Computing) technology.",
      "questions": [
        {
          "question": "What is the main purpose of edge computing?",
          "options": [
            "To increase spectrum efficiency",
            "To reduce latency",
            "To replace 5G NR",
            "To provide unlimited bandwidth"
          ],
          "correctAnswer": [1],
          "explanation": "Edge computing places processing close to users to reduce end-to-end latency for real-time services."
        },
        {
          "question": "Where is data processed in edge computing?",
          "options": [
            "In remote hyperscale cloud only",
            "Near the gNodeB (at the edge)",
            "Only on user devices",
            "At satellite ground stations"
          ],
          "correctAnswer": [1],
          "explanation": "Edge computing typically uses servers located near the base station (MEC) to process data locally."
        },
        {
          "question": "Mention one technology enabling edge computing.",
          "options": [
            "MEC (Multi-access Edge Computing)",
            "GSM",
            "CDMA",
            "Dial-up modems"
          ],
          "correctAnswer": [0],
          "explanation": "MEC is the standard framework for deploying compute and storage resources at the network edge."
        },
        {
          "question": "Name two applications requiring edge computing.",
          "options": [
            "AR/VR and autonomous vehicles",
            "Email and static web pages",
            "Offline data entry and spreadsheets",
            "Fax transmission and dial-up internet"
          ],
          "correctAnswer": [0],
          "explanation": "Latency-sensitive applications like AR/VR and autonomous driving benefit from local edge processing."
        },
        {
          "question": "How does edge computing help the network?",
          "options": [
            "Increases core network load",
            "Reduces core network load",
            "Eliminates the need for RAN",
            "Always increases latency"
          ],
          "correctAnswer": [1],
          "explanation": "By handling processing locally, edge computing reduces traffic sent to the central core, lowering backhaul load."
        }
      ]
    },
      "passage_15": 
    {
      "title": "5G Security",
      "passage": "5G introduces enhanced security features like SUPI (Subscription Permanent Identifier) and its encrypted version SUCI for user identity protection. SEPP (Security Edge Protection Proxy) handles inter-operator security during roaming. 5G supports unified authentication using 5G-AKA and EAP-AKA’ to ensure privacy and prevent tracking.",
      "questions": [
        {
          "question": "What is SUPI?",
          "options": [
            "Permanent subscriber identity",
            "Temporary identifier",
            "A type of radio signal",
            "A core network function"
          ],
          "correctAnswer": [0],
          "explanation": "SUPI stands for Subscription Permanent Identifier, the long-term identity of a 5G subscriber."
        },
        {
          "question": "Why is SUCI used?",
          "options": [
            "To accelerate data transfer",
            "To conceal subscriber identity during transmission",
            "To allocate IP addresses",
            "To configure antennas"
          ],
          "correctAnswer": [1],
          "explanation": "SUCI is an encrypted form of SUPI ensuring identity protection over the air."
        },
        {
          "question": "What is SEPP responsible for?",
          "options": [
            "Indoor coverage control",
            "Secure communication between operators",
            "QoS enforcement",
            "Antenna beam steering"
          ],
          "correctAnswer": [1],
          "explanation": "SEPP protects N32 interface traffic between operators, especially during roaming."
        },
        {
          "question": "Name one authentication method used in 5G.",
          "options": [
            "5G-AKA",
            "MD5 hashing",
            "2G SIM authentication",
            "SMS-based login"
          ],
          "correctAnswer": [0],
          "explanation": "5G-AKA is the standard authentication procedure ensuring strong mutual authentication."
        },
        {
          "question": "Why is SUPI never transmitted in plain text?",
          "options": [
            "To reduce power consumption",
            "To prevent identity theft or tracking",
            "Because it increases data rates",
            "Because it slows down mobility"
          ],
          "correctAnswer": [1],
          "explanation": "Sending SUPI encrypted prevents attackers from tracking users or performing IMSI-catching attacks."
        }
      ]
    },


"passage_16":
    {
      "title": "5G Vision and Use Cases",
      "passage": "5G aims to offer a unified wireless platform that can connect people, smart devices, machines, vehicles, and infrastructure under one network. It is designed to handle diverse applications ranging from high-speed multimedia streaming to mission-critical control and large-scale IoT deployments. The key goals include ultra-fast data rates, high reliability, very low latency, and support for advanced applications such as autonomous vehicles, smart cities, remote medical procedures, augmented/virtual reality, and Industry 4.0 smart manufacturing.",
      "questions": [
        {
          "question": "5G mainly aims to:",
          "options": [
            "Support only voice calls",
            "Provide a unified platform connecting many devices and applications",
            "Replace wired LAN in homes only",
            "Work only for rural coverage"
          ],
          "correctAnswer": [1],
          "explanation": "5G’s vision focuses on enabling connectivity for people, machines, and infrastructure under one framework."
        },
        {
          "question": "Which of the following is NOT a typical 5G target application?",
          "options": [
            "Smart cities",
            "Remote surgery",
            "Industry 4.0",
            "Analog TV broadcast only"
          ],
          "correctAnswer": [3],
          "explanation": "Analog TV broadcasting is not a 5G use case; 5G is built for advanced and digital applications."
        },
        {
          "question": "One important goal of 5G is:",
          "options": [
            "Very high latency",
            "Very low reliability",
            "Very low latency with high reliability",
            "No support for IoT"
          ],
          "correctAnswer": [2],
          "explanation": "5G supports latency-sensitive and mission-critical applications requiring low latency and high reliability."
        },
        {
          "question": "5G is expected to serve:",
          "options": [
            "Only human users",
            "Only fixed broadband users",
            "People, machines, and infrastructure",
            "Only satellite devices"
          ],
          "correctAnswer": [2],
          "explanation": "5G enables communication across diverse domains, including IoT, industrial systems, and human users."
        },
        {
          "question": "Remote medical procedures like telesurgery primarily need:",
          "options": [
            "High latency and low reliability",
            "Low latency and high reliability",
            "High latency and low data rate",
            "No connectivity"
          ],
          "correctAnswer": [1],
          "explanation": "Telesurgery demands extremely low latency and reliable connectivity, provided by URLLC."
        }
      ]
    },
    "passage_17":{
      "title": "eMBB, URLLC, mMTC",
      "passage": "5G services are broadly classified into Enhanced Mobile Broadband (eMBB), Ultra-Reliable Low Latency Communications (URLLC), and Massive Machine Type Communications (mMTC). eMBB focuses on very high data rates and capacity, enabling 4K/8K video, VR/AR, and fast mobile broadband. URLLC is designed for services where even a tiny delay or failure can cause serious damage, such as autonomous vehicles, industrial robots, smart grids, and remote surgery, with target latency around 1 ms and reliability near 99.999%. mMTC concentrates on connecting a massive number of small, low-power devices that send small, infrequent data, like smart meters, environmental sensors, and wearables, targeting up to one million devices per square kilometre with long battery life.",
      "questions": [
        {
          "question": "eMBB mainly supports:",
          "options": [
            "Massive low-power sensors",
            "High data-rate applications like 4K video",
            "Only voice calls",
            "Only SMS services"
          ],
          "correctAnswer": [1],
          "explanation": "eMBB delivers high data rates suitable for HD/4K video and AR/VR applications."
        },
        {
          "question": "URLLC typically targets latency around:",
          "options": [
            "100 ms",
            "10 ms",
            "1 ms",
            "1 second"
          ],
          "correctAnswer": [2],
          "explanation": "URLLC aims for <1 ms latency to support mission-critical applications."
        },
        {
          "question": "The approximate reliability target for URLLC is:",
          "options": [
            "90%",
            "95%",
            "99%",
            "99.999%"
          ],
          "correctAnswer": [3],
          "explanation": "URLLC requires extremely high reliability—five-nines—to avoid mission-critical failures."
        },
        {
          "question": "mMTC is mainly characterized by:",
          "options": [
            "Few devices with high data rate",
            "Many devices with low power and small data",
            "Only voice users",
            "High-speed mobile broadband only"
          ],
          "correctAnswer": [1],
          "explanation": "mMTC connects massive numbers of low-power IoT devices that send small bursts of data."
        },
        {
          "question": "A typical device density target for mMTC is up to:",
          "options": [
            "100 devices/km²",
            "1,000 devices/km²",
            "100,000 devices/km²",
            "1,000,000 devices/km²"
          ],
          "correctAnswer": [3],
          "explanation": "mMTC supports extreme densities of up to 1 million devices per square kilometer."
        }
      ]
    },

 "passage_18":   {
      "title": "Network Slicing and 5G Core",
      "passage": "To support diverse service requirements, 5G introduces network slicing, where multiple logical networks are created on a common physical infrastructure. Each slice is tailored for a specific service type, such as an URLLC slice optimized for ultra-low latency and reliability, or an mMTC slice tuned for massive connectivity and energy efficiency. The 5G Core (5GC) is designed as a cloud-native, service-based architecture, using modular microservices. Network Functions communicate mainly over HTTP/2 and REST APIs, allowing independent scaling, flexible deployment, and fast introduction of new services. Control and User Plane Separation (CUPS) further allows control plane functions and user plane functions to scale independently and supports deploying user plane functions near the edge for reduced latency.",
      "questions": [
        {
          "question": "Network slicing allows operators to:",
          "options": [
            "Use only one fixed network configuration",
            "Create multiple virtual networks optimized for different services",
            "Disable QoS mechanisms",
            "Use only hardware-based nodes"
          ],
          "correctAnswer": [1],
          "explanation": "Network slicing enables multiple tailored virtual networks on a shared infrastructure."
        },
        {
          "question": "The 5G Core is mainly built as:",
          "options": [
            "Circuit-switched architecture",
            "Monolithic hardware platform",
            "Cloud-native, service-based architecture",
            "Analog switching system"
          ],
          "correctAnswer": [2],
          "explanation": "5GC follows cloud-native microservice architecture for scalability and modularity."
        },
        {
          "question": "In 5GC, Network Functions typically communicate using:",
          "options": [
            "SS7 signaling",
            "HTTP/2 and REST APIs",
            "Morse code",
            "ATM cells"
          ],
          "correctAnswer": [1],
          "explanation": "HTTP/2 and REST APIs enable service-based communication in 5G Core."
        },
        {
          "question": "CUPS in 5G enables:",
          "options": [
            "Coupling control and user planes tightly",
            "Independent scaling of control and user planes",
            "Removing user plane functions",
            "Only radio control"
          ],
          "correctAnswer": [1],
          "explanation": "CUPS separates control plane and user plane to allow independent scaling and low latency."
        },
        {
          "question": "Deploying UPF near the edge mainly helps to:",
          "options": [
            "Increase latency",
            "Reduce latency for user data",
            "Remove slicing",
            "Replace the radio network"
          ],
          "correctAnswer": [1],
          "explanation": "UPF at the edge shortens the data path, lowering latency for time-critical applications."
        }
      ]
    },

    "passage_19":{
      "title": "Key 5G Core Functions (AMF, SMF, UPF)",
      "passage": "In the 5G Core, different logical functions handle access, session, and data transport. The Access and Mobility Management Function (AMF) resides on the control plane and manages user equipment registration, mobility, security context setup, and routing signaling to other core functions. The Session Management Function (SMF) controls PDU sessions, including IP address allocation, policy enforcement, and selection and control of User Plane Functions (UPFs). The UPF operates on the user plane and forwards actual user data between the user equipment and external data networks, applying QoS and traffic routing policies. Together, these functions replace and enhance roles previously handled by elements like MME, SGW, and PGW in 4G.",
      "questions": [
        {
          "question": "The AMF is mainly responsible for:",
          "options": [
            "User-plane data forwarding",
            "Access, registration, and mobility management",
            "Physical layer coding",
            "Application hosting"
          ],
          "correctAnswer": [1],
          "explanation": "AMF oversees UE registration, mobility, and NAS signaling."
        },
        {
          "question": "The SMF primarily manages:",
          "options": [
            "Radio resource scheduling",
            "PDU session management and UPF control",
            "Antenna beam patterns",
            "Hardware maintenance"
          ],
          "correctAnswer": [1],
          "explanation": "SMF handles PDU session lifecycle, IP allocation, and UPF configuration."
        },
        {
          "question": "The UPF operates on:",
          "options": [
            "Control plane",
            "User plane",
            "Management plane only",
            "Physical layer only"
          ],
          "correctAnswer": [1],
          "explanation": "UPF is a user-plane entity responsible for data forwarding and QoS enforcement."
        },
        {
          "question": "A PDU session in 5G represents:",
          "options": [
            "A voice-only call",
            "A logical data connection between UE and a data network",
            "A physical radio link",
            "An SMS connection"
          ],
          "correctAnswer": [1],
          "explanation": "PDU sessions provide logical data connectivity between the UE and the DN."
        },
        {
          "question": "These 5G Core functions effectively replace parts of:",
          "options": [
            "GSM BSC only",
            "Wi-Fi controllers",
            "4G elements like MME, SGW, and PGW",
            "Satellite gateways only"
          ],
          "correctAnswer": [2],
          "explanation": "AMF, SMF, and UPF modernize and replace key EPC components from LTE."
        }
      ]
    },

   "passage_20": {
      "title": "NG-RAN, Massive MIMO, mmWave, Edge",
      "passage": "The Next Generation Radio Access Network (NG-RAN) connects user equipment to the 5G Core using 5G New Radio technology and mainly consists of gNodeBs. gNodeBs support advanced features such as massive MIMO, beamforming, and carrier aggregation to increase capacity and reliability. Massive MIMO uses large antenna arrays and spatial multiplexing to serve multiple users on the same time-frequency resources by separating their signals in space. For extremely high data rates, 5G uses millimeter wave (mmWave) bands typically in the 24–100 GHz range, which offer huge bandwidth but suffer from high path loss and poor penetration, making them suitable for dense urban areas and hotspots. To reduce latency and core network load, operators use edge computing via Multi-access Edge Computing (MEC) nodes near base stations, processing data close to users for applications like AR/VR and autonomous driving.",
      "questions": [
        {
          "question": "NG-RAN mainly consists of:",
          "options": [
            "NodeBs",
            "eNodeBs",
            "gNodeBs",
            "Wi-Fi APs"
          ],
          "correctAnswer": [2],
          "explanation": "NG-RAN uses gNodeBs as the primary 5G base stations."
        },
        {
          "question": "Massive MIMO improves capacity by:",
          "options": [
            "Using a single antenna only",
            "Serving multiple users on the same resources using spatial multiplexing",
            "Reducing the number of antennas",
            "Turning off MIMO"
          ],
          "correctAnswer": [1],
          "explanation": "Spatial multiplexing enables multiple users to share the same spectrum efficiently."
        },
        {
          "question": "Typical 5G mmWave frequencies lie approximately in:",
          "options": [
            "2–6 GHz",
            "24–100 GHz",
            "0.1–1 GHz",
            "1–2 GHz"
          ],
          "correctAnswer": [1],
          "explanation": "mmWave for 5G ranges from 24 to 100 GHz, providing very high bandwidth."
        },
        {
          "question": "A major drawback of mmWave is:",
          "options": [
            "Very low data rates",
            "High path loss and poor penetration",
            "No use in urban areas",
            "Incompatibility with OFDM"
          ],
          "correctAnswer": [1],
          "explanation": "mmWave signals cannot penetrate walls and have high attenuation."
        },
        {
          "question": "MEC-based edge computing is mainly used to:",
          "options": [
            "Increase backhaul distance",
            "Reduce latency by processing data near users",
            "Remove the need for the 5G Core",
            "Only store backups"
          ],
          "correctAnswer": [1],
          "explanation": "Edge computing reduces latency by processing data near the gNodeB rather than distant cloud servers."
        }
      ]
    }


    }
  }
};

// Simple adapter functions for backward compatibility with your original structure
export function debugQuestionsData() {
  console.log('=== DEBUG QUESTIONS DATA ===');
  console.log('allQuestionsData keys:', Object.keys(allQuestionsData));
  console.log('Unit1 modules:', Object.keys(allQuestionsData.unit1));
  console.log('=== END DEBUG ===');
}

// Test function to verify unit1 passages
export function testUnit1Passages(): {
  totalPassages: number;
  totalQuestions: number;
  passages: Array<{ title: string; questionCount: number }>;
  firstPassage: { title: string; questionCount: number } | null;
  passageKeys: string[];
} {
  const unit1 = allQuestionsData.unit1;
  const allPassages = Object.values(unit1.passage_based_questions);
  
  return {
    totalPassages: allPassages.length,
    totalQuestions: allPassages.reduce((total, passage) => total + (passage.questions ? passage.questions.length : 0), 0),
    passages: allPassages.map(passage => ({
      title: passage.title,
      questionCount: passage.questions ? passage.questions.length : 0
    })),
    firstPassage: allPassages[0] ? {
      title: allPassages[0].title,
      questionCount: allPassages[0].questions ? allPassages[0].questions.length : 0
    } : null,
    passageKeys: Object.keys(unit1.passage_based_questions)
  };
}

export function getAllQuestions(mode?: PracticeMode): Question[] {
  console.log('=== getAllQuestions called with mode:', mode, '===');
  
  const unit1 = allQuestionsData.unit1;
  const unit2 = allQuestionsData.unit2;
  const unit3 = allQuestionsData.unit3;
  
  if (!mode || mode === 'all') {
    return [
      ...unit1.module1,
      ...unit1.module2, 
      ...unit1.module3,
      ...unit1.module4,
      ...unit1.module5,
      ...unit1.module6,
      ...unit1.module7,
      ...unit1.assignment,
      ...unit2.module1,
      ...unit2.module2,
      ...unit2.module3,
      ...unit2.module4,
      ...unit2.module5,
      ...unit2.module6,
      ...unit2.module7,
      ...unit2.assignment,
      ...unit3.module1,
      ...unit3.module2,
      ...unit3.module3,
      ...unit3.module4,
      ...unit3.module5,
      ...unit3.module6,
      ...unit3.module7,
      ...unit3.assignment
    ];
  }

  // Unit-specific modes
  if (mode === 'unit1') {
    return [
      ...unit1.module1,
      ...unit1.module2,
      ...unit1.module3,
      ...unit1.module4,
      ...unit1.module5,
      ...unit1.module6,
      ...unit1.module7
    ];
  }

  if (mode === 'unit2') {
    return [
      ...unit2.module1,
      ...unit2.module2,
      ...unit2.module3,
      ...unit2.module4,
      ...unit2.module5,
      ...unit2.module6,
      ...unit2.module7
    ];
  }

  if (mode === 'unit3') {
    return [
      ...unit3.module1,
      ...unit3.module2,
      ...unit3.module3,
      ...unit3.module4,
      ...unit3.module5,
      ...unit3.module6,
      ...unit3.module7
    ];
  }

  // Assignment questions from all units
  if (mode === 'assignment') {
    return [
      ...unit1.assignment,
      ...unit2.assignment,
      ...unit3.assignment
    ];
  }

  // Unit-specific assignment modes
  if (mode === 'unit1_assignment') {
    return unit1.assignment;
  }
  if (mode === 'unit2_assignment') {
    return unit2.assignment;
  }
  if (mode === 'unit3_assignment') {
    return unit3.assignment;
  }
  
  if (mode === 'passage') {
    const questions: Question[] = [];
    // Collect passage questions from all units
    Object.values(unit1.passage_based_questions).forEach((passage) => {
      if (passage && passage.questions && Array.isArray(passage.questions)) {
        passage.questions.forEach((q) => {
          // Add passage text to each question
          questions.push({
            ...q,
            question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
          });
        });
      }
    });
    Object.values(unit2.passage_based_questions).forEach((passage) => {
      if (passage && passage.questions && Array.isArray(passage.questions)) {
        passage.questions.forEach((q) => {
          // Add passage text to each question
          questions.push({
            ...q,
            question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
          });
        });
      }
    });
    Object.values(unit3.passage_based_questions).forEach((passage) => {
      if (passage && passage.questions && Array.isArray(passage.questions)) {
        passage.questions.forEach((q) => {
          // Add passage text to each question
          questions.push({
            ...q,
            question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
          });
        });
      }
    });
    return questions;
  }

  // Unit-specific passage modes
  if (mode === 'unit1_passage') {
    console.log('=== UNIT1_PASSAGE MODE CALLED ===');
    
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    // Get all passages from unit1 and shuffle them
    const allPassages = Object.values(unit1.passage_based_questions).filter(
      passage => passage && passage.questions && Array.isArray(passage.questions) && passage.questions.length > 0
    );
    const shuffledPassages = shuffleArray(allPassages);
    
    console.log(`Unit1 has ${allPassages.length} passages available`);
    
    const questions: Question[] = [];
    
    // Take questions from different passages to ensure variety
    shuffledPassages.forEach((passage, passageIndex) => {
      console.log(`Processing Unit1 passage ${passageIndex + 1}:`, passage.title || 'Untitled');
      
      passage.questions.forEach((q) => {
        // Add passage text to each question with passage identifier
        questions.push({
          ...q,
          question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });
    
    console.log('Unit1 passage questions count:', questions.length);
    return questions;
  }
  
  if (mode === 'unit2_passage') {
    console.log('=== UNIT2_PASSAGE MODE CALLED ===');
    
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    // Get all passages from unit2 and shuffle them
    const allPassages = Object.values(unit2.passage_based_questions).filter(
      passage => passage && passage.questions && Array.isArray(passage.questions) && passage.questions.length > 0
    );
    const shuffledPassages = shuffleArray(allPassages);
    
    console.log(`Unit2 has ${allPassages.length} passages available`);
    
    const questions: Question[] = [];
    
    // Take questions from different passages to ensure variety
    shuffledPassages.forEach((passage, passageIndex) => {
      console.log(`Processing Unit2 passage ${passageIndex + 1}:`, passage.title || 'Untitled');
      
      passage.questions.forEach((q) => {
        // Add passage text to each question with passage identifier
        questions.push({
          ...q,
          question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });
    
    console.log('Unit2 passage questions count:', questions.length);
    return questions;
  }
  
  if (mode === 'unit3_passage') {
    console.log('=== UNIT3_PASSAGE MODE CALLED ===');
    
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    // Get all passages from unit3 and shuffle them
    const allPassages = Object.values(unit3.passage_based_questions).filter(
      passage => passage && passage.questions && Array.isArray(passage.questions) && passage.questions.length > 0
    );
    const shuffledPassages = shuffleArray(allPassages);
    
    console.log(`Unit3 has ${allPassages.length} passages available`);
    
    const questions: Question[] = [];
    
    // Take questions from different passages to ensure variety
    shuffledPassages.forEach((passage, passageIndex) => {
      console.log(`Processing Unit3 passage ${passageIndex + 1}:`, passage.title || 'Untitled');
      
      passage.questions.forEach((q) => {
        // Add passage text to each question with passage identifier
        questions.push({
          ...q,
          question: `📖 PASSAGE: ${passage.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });
    
    console.log('Unit3 passage questions count:', questions.length);
    return questions;
  }

  // Unit-specific demo exam modes
  if (mode === 'unit1_demo') {
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Helper function to get passage groups for a unit
    const getUnitPassageGroups = (unit: UnitQuestions) => {
      const passageGroups: { passage: string; questions: Question[] }[] = [];
      (Object.values(unit.passage_based_questions) as PassageQuestion[]).forEach((passage: PassageQuestion) => {
        if (passage && passage.questions && Array.isArray(passage.questions)) {
          passageGroups.push({
            passage: passage.passage,
            questions: passage.questions
          });
        }
      });
      return passageGroups;
    };

    // Get all MCQ questions from modules and assignments (randomly)
    const allMCQQuestions = [
      ...unit1.module1,
      ...unit1.module2,
      ...unit1.module3,
      ...unit1.module4,
      ...unit1.module5,
      ...unit1.module6,
      ...unit1.module7,
      ...unit1.assignment
    ];

    // Randomly select 20 MCQ questions
    const mcqQuestions = shuffleArray(allMCQQuestions).slice(0, 20);

    // Get passage groups for unit1
    const passageGroups = getUnitPassageGroups(unit1);

    // Randomly select 4 passages
    const selectedPassages = shuffleArray(passageGroups).slice(0, 4);

    // Create passage questions with all questions from each selected passage
    const passageQuestions: Question[] = [];
    selectedPassages.forEach((group) => {
      group.questions.forEach((q) => {
        // Add passage text to each question
        passageQuestions.push({
          ...q,
          question: `📖 PASSAGE: ${group.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });

    // Return exactly 40 questions: 20 random MCQ + all questions from 4 selected passages
    return [...mcqQuestions, ...passageQuestions];
  }
  if (mode === 'unit2_demo') {
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Helper function to get passage groups for a unit
    const getUnitPassageGroups = (unit: UnitQuestions) => {
      const passageGroups: { passage: string; questions: Question[] }[] = [];
      (Object.values(unit.passage_based_questions) as PassageQuestion[]).forEach((passage: PassageQuestion) => {
        if (passage && passage.questions && Array.isArray(passage.questions)) {
          passageGroups.push({
            passage: passage.passage,
            questions: passage.questions
          });
        }
      });
      return passageGroups;
    };

    // Collect all MCQ questions from unit2 modules and assignments
    const allMcqQuestions: Question[] = [
      ...unit2.module1,
      ...unit2.module2,
      ...unit2.module3,
      ...unit2.module4,
      ...unit2.module5,
      ...unit2.module6,
      ...unit2.module7,
      ...unit2.assignment
    ];

    // Randomly select 20 MCQ questions
    const shuffledMcq = shuffleArray([...allMcqQuestions]);
    const mcqQuestions = shuffledMcq.slice(0, 20);

    // Get passage groups for unit2
    const passageGroups = getUnitPassageGroups(unit2);

    // Randomly select 4 passages
    const selectedPassages = shuffleArray(passageGroups).slice(0, 4);

    // Create passage questions with all questions from each selected passage
    const passageQuestions: Question[] = [];
    selectedPassages.forEach((group) => {
      group.questions.forEach((q) => {
        // Add passage text to each question
        passageQuestions.push({
          ...q,
          question: `📖 PASSAGE: ${group.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });

    // Return exactly 40 questions: 20 random MCQ + all questions from 4 selected passages (all from unit2)
    return [...mcqQuestions, ...passageQuestions];
  }

  if (mode === 'unit3_demo') {
    // Function to shuffle array randomly
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Helper function to get passage groups for a unit
    const getUnitPassageGroups = (unit: UnitQuestions) => {
      const passageGroups: { passage: string; questions: Question[] }[] = [];
      (Object.values(unit.passage_based_questions) as PassageQuestion[]).forEach((passage: PassageQuestion) => {
        if (passage && passage.questions && Array.isArray(passage.questions)) {
          passageGroups.push({
            passage: passage.passage,
            questions: passage.questions
          });
        }
      });
      return passageGroups;
    };

    // Collect all MCQ questions from unit3 modules and assignments
    const allMcqQuestions: Question[] = [
      ...unit3.module1,
      ...unit3.module2,
      ...unit3.module3,
      ...unit3.module4,
      ...unit3.module5,
      ...unit3.module6,
      ...unit3.module7,
      ...unit3.assignment
    ];

    // Randomly select 20 MCQ questions
    const shuffledMcq = shuffleArray([...allMcqQuestions]);
    const mcqQuestions = shuffledMcq.slice(0, 20);

    // Get passage groups for unit3
    const passageGroups = getUnitPassageGroups(unit3);

    // Randomly select 4 passages
    const selectedPassages = shuffleArray(passageGroups).slice(0, 4);

    // Create passage questions with all questions from each selected passage
    const passageQuestions: Question[] = [];
    selectedPassages.forEach((group) => {
      group.questions.forEach((q) => {
        // Add passage text to each question
        passageQuestions.push({
          ...q,
          question: `📖 PASSAGE: ${group.passage}\n\n🔸 QUESTION: ${q.question}`
        });
      });
    });

    // Return exactly 40 questions: 20 random MCQ + all questions from 4 selected passages (all from unit3)
    return [...mcqQuestions, ...passageQuestions];
  }

  // Unit-specific all questions modes
  if (mode === 'unit1_all') {
    return [
      ...unit1.module1,
      ...unit1.module2,
      ...unit1.module3,
      ...unit1.module4,
      ...unit1.module5,
      ...unit1.module6,
      ...unit1.module7,
      ...unit1.assignment
    ];
  }
  if (mode === 'unit2_all') {
    return [
      ...unit2.module1,
      ...unit2.module2,
      ...unit2.module3,
      ...unit2.module4,
      ...unit2.module5,
      ...unit2.module6,
      ...unit2.module7,
      ...unit2.assignment
    ];
  }
  if (mode === 'unit3_all') {
    return [
      ...unit3.module1,
      ...unit3.module2,
      ...unit3.module3,
      ...unit3.module4,
      ...unit3.module5,
      ...unit3.module6,
      ...unit3.module7,
      ...unit3.assignment
    ];
  }
  
  // Return specific module from unit1 (backward compatibility)
  if (mode === 'module1') return unit1.module1;
  if (mode === 'module2') return unit1.module2;
  if (mode === 'module3') return unit1.module3;
  if (mode === 'module4') return unit1.module4;
  if (mode === 'module5') return unit1.module5;
  if (mode === 'module6') return unit1.module6;
  if (mode === 'module7') return unit1.module7;
  
  // Unit 2 specific modules
  if (mode === 'unit2_module1') return unit2.module1;
  if (mode === 'unit2_module2') return unit2.module2;
  if (mode === 'unit2_module3') return unit2.module3;
  if (mode === 'unit2_module4') return unit2.module4;
  if (mode === 'unit2_module5') return unit2.module5;
  if (mode === 'unit2_module6') return unit2.module6;
  if (mode === 'unit2_module7') return unit2.module7;
  
  // Unit 3 specific modules  
  if (mode === 'unit3_module1') return unit3.module1;
  if (mode === 'unit3_module2') return unit3.module2;
  if (mode === 'unit3_module3') return unit3.module3;
  if (mode === 'unit3_module4') return unit3.module4;
  if (mode === 'unit3_module5') return unit3.module5;
  if (mode === 'unit3_module6') return unit3.module6;
  if (mode === 'unit3_module7') return unit3.module7;
  
  return [];
}

// Function to check if a practice mode has questions available
export function hasQuestionsForMode(mode: PracticeMode): boolean {
  const questions = getAllQuestions(mode);
  return questions.length > 0;
}

// Function to get available modules for a unit
export function getAvailableModules(unit: 'unit1' | 'unit2' | 'unit3'): number[] {
  const availableModules: number[] = [];
  
  for (let moduleNum = 1; moduleNum <= 7; moduleNum++) {
    const mode = unit === 'unit1' 
      ? `module${moduleNum}` as PracticeMode
      : `${unit}_module${moduleNum}` as PracticeMode;
    
    if (hasQuestionsForMode(mode)) {
      availableModules.push(moduleNum);
    }
  }
  
  return availableModules;
}

export function getAllPassageQuestions(): PassageQuestion[] {
  return [
    ...Object.values(allQuestionsData.unit1.passage_based_questions),
    ...Object.values(allQuestionsData.unit2.passage_based_questions),
    ...Object.values(allQuestionsData.unit3.passage_based_questions)
  ];
}

export function getPassageQuestions(): Question[] {
  return getAllQuestions('passage');
}

export function getDemoExamQuestions(): { mcqQuestions: Question[], passageQuestions: PassageQuestion[] } {
  // Function to shuffle array randomly
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Collect all MCQ questions from all units with fair distribution
  const allMcqQuestions: Question[] = [
    ...allQuestionsData.unit1.module1,
    ...allQuestionsData.unit1.module2,
    ...allQuestionsData.unit1.module3,
    ...allQuestionsData.unit1.module4,
    ...allQuestionsData.unit1.module5,
    ...allQuestionsData.unit1.module6,
    ...allQuestionsData.unit1.module7,
    ...allQuestionsData.unit1.assignment,
    ...allQuestionsData.unit2.module1,
    ...allQuestionsData.unit2.module2,
    ...allQuestionsData.unit2.module3,
    ...allQuestionsData.unit2.module4,
    ...allQuestionsData.unit2.module5,
    ...allQuestionsData.unit2.module6,
    ...allQuestionsData.unit2.module7,
    ...allQuestionsData.unit2.assignment,
    ...allQuestionsData.unit3.module1,
    ...allQuestionsData.unit3.module2,
    ...allQuestionsData.unit3.module3,
    ...allQuestionsData.unit3.module4,
    ...allQuestionsData.unit3.module5,
    ...allQuestionsData.unit3.module6,
    ...allQuestionsData.unit3.module7,
    ...allQuestionsData.unit3.assignment
  ];

  // Shuffle all MCQ questions and select 40
  const shuffledMcq = shuffleArray(allMcqQuestions);
  const mcqQuestions = shuffledMcq.slice(0, 40);

  // Collect all passages from all units
  const allPassages: PassageQuestion[] = [
    ...Object.values(allQuestionsData.unit1.passage_based_questions),
    ...Object.values(allQuestionsData.unit2.passage_based_questions),
    ...Object.values(allQuestionsData.unit3.passage_based_questions)
  ];

  // Shuffle all passages and select 8
  const shuffledPassages = shuffleArray(allPassages);
  const passageQuestions = shuffledPassages.slice(0, 8);

  console.log(`Global demo exam: Selected ${mcqQuestions.length} MCQ questions and ${passageQuestions.length} passages`);

  return {
    mcqQuestions,
    passageQuestions
  };
}

export default allQuestionsData;
