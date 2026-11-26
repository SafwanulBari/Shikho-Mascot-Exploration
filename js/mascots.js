/*
 * Mascot data — source of truth: Figma "Mascot Exploration", page "Review" (node 121:51).
 * Each mascot style is its own character with its own emotion collection; images are
 * never shared between mascots. Emotion images are the transparent cut-outs used in
 * each style's "Emotions" board.
 *
 * Mascot:  id, name, style, front, description, turnaround, emotions[]
 * Emotion: id, name, image, description
 */
(function () {
  // Emotion names as they appear in the Figma boards, with a short usage note.
  var EMOTION_INFO = {
    reading: { name: 'Reading Book', desc: 'Absorbed in a good book. Use it for lessons, study time and reading lists.' },
    notes: { name: 'Note Taking', desc: 'Busy jotting down notes. Use it for to-dos, summaries and saving progress.' },
    trophy: { name: 'Holding Trophy', desc: 'Proudly lifting a trophy. Use it for achievements, wins and leaderboards.' },
    hi: { name: 'Hi', desc: 'A friendly wave hello. Use it for onboarding, greetings and welcome screens.' },
    clapping: { name: 'Clapping', desc: 'Cheering you on with applause. Use it for completed tasks and good answers.' },
    thumbs: { name: 'Thumbs Up', desc: 'A confident thumbs-up. Use it for confirmations, approvals and “nice job”.' },
    error: { name: 'Error State', desc: 'Teary-eyed with a broken pencil. Use it for errors, failed attempts and empty states.' }
  };
  // Order of the cards in each Figma board: row 1, row 2, row 3.
  var ORDER = ['reading', 'notes', 'trophy', 'hi', 'clapping', 'thumbs', 'error'];

  function emotions(mascotId) {
    return ORDER.map(function (slug) {
      return {
        id: mascotId + '-' + slug,
        slug: slug,
        name: EMOTION_INFO[slug].name,
        image: 'assets/emotions/' + mascotId + '-' + slug + '.webp',
        description: EMOTION_INFO[slug].desc
      };
    });
  }

  window.MASCOTS = [
    {
      id: '01', name: 'Mascot 01', style: 'Glossy Blue Bird', trait: 'Cheerful',
      description: 'Glossy blue bird with bright pink wings and a big open smile.',
      figmaNode: '121:68', tint: '#E9EEFF',
      front: 'assets/fronts/01.png',
      emotions: emotions('01'),
      turnaround: 'assets/turnarounds/01.webp'
    },
    {
      id: '02', name: 'Mascot 02', style: 'Orange-Cap Bird', trait: 'Warm',
      description: 'Round blue bird with an orange head, a pink frilled collar and a happy pink beak.',
      figmaNode: '121:505', tint: '#FFF1E2',
      front: 'assets/fronts/02.png',
      emotions: emotions('02'),
      turnaround: 'assets/turnarounds/02.webp'
    },
    {
      id: '03', name: 'Mascot 03', style: 'Sunny Bandana Chick', trait: 'Curious',
      description: 'Sunny yellow chick with a pink bandana, big feathery pink wings and a blue beak.',
      figmaNode: '121:602', tint: '#FFF4DC',
      front: 'assets/fronts/03.png',
      emotions: emotions('03'),
      turnaround: 'assets/turnarounds/03.webp'
    },
    {
      id: '04', name: 'Mascot 04', style: 'Fluffy Crest Chick', trait: 'Playful',
      description: 'Fluffy yellow chick with a pink feather crest, a blue feathered body and pink tail fans.',
      figmaNode: '121:629', tint: '#FFF6D8',
      front: 'assets/fronts/04.png',
      emotions: emotions('04'),
      turnaround: 'assets/turnarounds/04.webp'
    },
    {
      id: '05', name: 'Mascot 05', style: 'Toy Bird', trait: 'Gentle',
      description: 'Toy-like bird with a smooth yellow head and a pink sash across its blue chest.',
      figmaNode: '121:709', tint: '#FFF3DD',
      front: 'assets/fronts/05.png',
      emotions: emotions('05'),
      turnaround: 'assets/turnarounds/05.webp'
    },
    {
      id: '06', name: 'Mascot 06', style: 'Flat Cartoon Bird', trait: 'Friendly',
      description: 'Flat cartoon blue bird with a pink crest, pink wings and big round eyes with a yellow beak.',
      figmaNode: '123:3813', tint: '#E8F1FF',
      front: 'assets/fronts/06.png',
      emotions: emotions('06'),
      turnaround: 'assets/turnarounds/06.webp'
    },
    {
      id: '07', name: 'Mascot 07', style: 'Glossy 3D Chick', trait: 'Bold',
      description: 'Glossy 3D blue chick with a pink crest, pink feet and a rounded, soft-shaded body.',
      figmaNode: '123:3839', tint: '#E6F4FF',
      front: 'assets/fronts/07.png',
      emotions: emotions('07'),
      turnaround: 'assets/turnarounds/07.webp'
    },
    {
      id: '08', name: 'Mascot 08', style: 'Two-Tone 3D Chick', trait: 'Sunny',
      description: 'Round 3D chick with a yellow head, a blue body, a pink crest and pink feet.',
      figmaNode: '139:3917', tint: '#FFF5DA',
      front: 'assets/fronts/08.png',
      emotions: emotions('08'),
      turnaround: 'assets/turnarounds/08.webp'
    }
  ];

})();
