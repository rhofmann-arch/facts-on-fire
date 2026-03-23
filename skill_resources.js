/**
 * skill_resources.js
 * MS Automaticity — Facts on Fire / M.I.N.D. 2.0
 *
 * SINGLE SOURCE OF TRUTH for all skill↔resource linkages.
 *
 * Skill keys use stable format:  g{grade}w{week}
 *   e.g.  g5w1  = Grade 5 Week 1  (Multidigit addition)
 *         g6w15 = Grade 6 Week 15 (Integer addition)
 *
 * Resource types:
 *   puzzle       — generated puzzle sheet (id matches ms_puzzle_generator.html selType)
 *   game         — interactive game or digital tool (id to be assigned when built)
 *   intervention — targeted intervention activity   (id to be assigned when built)
 *
 * Adding a new linkage:
 *   1. Find or create the skill key (g{grade}w{week}).
 *   2. Push an entry into the appropriate array (puzzles / games / interventions).
 *   3. Each entry: { id, label, notes }
 *      - id     : machine key used to invoke the tool  (e.g. 'tttwin')
 *      - label  : human-readable display name          (e.g. 'TTT Winning Move')
 *      - notes  : optional context for teacher guides  (e.g. 'Beast Academy 5A')
 *
 * Last updated: Session 3 — 2026-03-22
 */

const SKILL_RESOURCES = {

  // ── GRADE 5 ──────────────────────────────────────────────────────────────

  g5w6: {
    skill: 'Division facts (continued)',
    grade: '5', week: 6,
    puzzles: [
      { id: 'divpyramid', label: 'Division Pyramid', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w8: {
    skill: 'Long division',
    grade: '5', week: 8,
    puzzles: [
      { id: 'digitdiv', label: 'Digit Division', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w9: {
    skill: 'Perfect squares (to 100)',
    grade: '5', week: 9,
    puzzles: [
      { id: 'mazeescape',     label: 'Maze Escape',     notes: '' },
      { id: 'arrangingboxes', label: 'Arranging Boxes', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w14: {
    skill: 'Area of a triangle — all triangles',
    grade: '5', week: 14,
    puzzles: [
      { id: 'sankaku', label: 'Sankaku', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w15: {
    skill: 'Decimal addition ($)',
    grade: '5', week: 15,
    puzzles: [
      { id: 'placedecimal', label: 'Place Decimal', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w16: {
    skill: 'Decimal subtraction ($)',
    grade: '5', week: 16,
    puzzles: [
      { id: 'placedecimal', label: 'Place Decimal', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w26: {
    skill: 'Fraction addition — level 1 unlike',
    grade: '5', week: 26,
    puzzles: [
      { id: 'fracpyramid', label: 'Fraction Pyramids', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w27: {
    skill: 'Fraction subtraction — level 1 unlike',
    grade: '5', week: 27,
    puzzles: [
      { id: 'frackenken',  label: 'Fraction KenKen',  notes: '' },
      { id: 'fracpyramid', label: 'Fraction Pyramids', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w28: {
    skill: 'Fraction multiplication',
    grade: '5', week: 28,
    puzzles: [
      { id: 'frackenken', label: 'Fraction KenKen', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w29: {
    skill: 'Fraction division',
    grade: '5', week: 29,
    puzzles: [
      { id: 'frackenken', label: 'Fraction KenKen', notes: '' }
    ],
    games: [], interventions: []
  },

  g5w30: {
    skill: 'Fraction division (continued)',
    grade: '5', week: 30,
    puzzles: [
      { id: 'twostep', label: 'Two-Step (fractions)', notes: '' }
    ],
    games: [], interventions: []
  },


  // ── GRADE 6 ──────────────────────────────────────────────────────────────

  g6w1: {
    skill: 'Perfect squares (to 144)',
    grade: '6', week: 1,
    puzzles: [
      { id: 'mazeescape',     label: 'Maze Escape',     notes: '' },
      { id: 'arrangingboxes', label: 'Arranging Boxes', notes: '' }
    ],
    games: [], interventions: []
  },

  g6w8: {
    skill: 'Fraction computation +/−',
    grade: '6', week: 8,
    puzzles: [
      { id: 'fracpyramid', label: 'Fraction Pyramids', notes: '' }
    ],
    games: [], interventions: []
  },

  g6w15: {
    skill: 'Integer addition',
    grade: '6', week: 15,
    puzzles: [
      { id: 'tttwin', label: 'TTT Winning Move', notes: '' }
    ],
    games: [], interventions: []
  },

  g6w16: {
    skill: 'Integer addition (beat score)',
    grade: '6', week: 16,
    puzzles: [
      { id: 'tttwin', label: 'TTT Winning Move', notes: '' }
    ],
    games: [], interventions: []
  },

  g6w17: {
    skill: 'Integer subtraction',
    grade: '6', week: 17,
    puzzles: [
      { id: 'sumsquares', label: 'Sum Squares', notes: 'Beast Academy 4C' }
    ],
    games: [], interventions: []
  },

  g6w18: {
    skill: 'Integer subtraction (beat score)',
    grade: '6', week: 18,
    puzzles: [
      { id: 'sumsquares', label: 'Sum Squares', notes: 'Beast Academy 4C' }
    ],
    games: [], interventions: []
  },

  g6w19: {
    skill: 'Integer addition/subtraction mixed',
    grade: '6', week: 19,
    puzzles: [
      { id: 'sumsquares', label: 'Sum Squares', notes: 'Beast Academy 4C' }
    ],
    games: [], interventions: []
  },

  g6w20: {
    skill: 'Integer multiplication',
    grade: '6', week: 20,
    puzzles: [
      { id: 'intblobs', label: 'Integer Blobs', notes: 'Beast Academy 5A' }
    ],
    games: [], interventions: []
  },

  g6w21: {
    skill: 'Integer multiplication (beat score)',
    grade: '6', week: 21,
    puzzles: [
      { id: 'intblobs', label: 'Integer Blobs', notes: 'Beast Academy 5A' }
    ],
    games: [], interventions: []
  },

  g6w23: {
    skill: 'Integer division (beat score)',
    grade: '6', week: 23,
    puzzles: [
      { id: 'twostep', label: 'Two-Step (integers)', notes: '' }
    ],
    games: [], interventions: []
  },

  g6w27: {
    skill: 'Expressions — scale an expression',
    grade: '6', week: 27,
    puzzles: [
      { id: 'sixlegs', label: 'Six Legs', notes: '' }
    ],
    games: [], interventions: []
  },


  // ── GRADE 7 ──────────────────────────────────────────────────────────────

  g7w12: {
    skill: 'Classifying quadrilaterals',
    grade: '7', week: 12,
    puzzles: [
      { id: 'zukei', label: 'Zukei', notes: '' }
    ],
    games: [], interventions: []
  },


  // ── GRADE 8 ──────────────────────────────────────────────────────────────

  g8w1: {
    skill: 'Integer computation',
    grade: '8', week: 1,
    puzzles: [
      { id: 'twostep',    label: 'Two-Step',      notes: '' },
      { id: 'sumsquares', label: 'Sum Squares',   notes: '' },
      { id: 'intblobs',   label: 'Integer Blobs', notes: '' }
    ],
    games: [], interventions: []
  },

  g8w2: {
    skill: 'Fraction computation',
    grade: '8', week: 2,
    puzzles: [
      { id: 'twostep',    label: 'Two-Step',         notes: '' },
      { id: 'frackenken', label: 'Fraction KenKen',  notes: '' }
    ],
    games: [], interventions: []
  },

  g8w3: {
    skill: 'Decimal computation',
    grade: '8', week: 3,
    puzzles: [
      { id: 'twostep', label: 'Two-Step', notes: '' }
    ],
    games: [], interventions: []
  }

};

/**
 * PUZZLE TYPE REGISTRY
 * Human-readable info for each puzzle type ID.
 * Extend as new puzzle types are added to ms_puzzle_generator.html.
 */
const PUZZLE_REGISTRY = {
  sixlegs:        { label: 'Six Legs',            category: 'algebra/expressions' },
  sankaku:        { label: 'Sankaku',              category: 'geometry/area' },
  zukei:          { label: 'Zukei',               category: 'geometry/classification' },
  mazeescape:     { label: 'Maze Escape',          category: 'perfect squares' },
  arrangingboxes: { label: 'Arranging Boxes',      category: 'perfect squares' },
  fourthpoint:    { label: 'Fourth Point',         category: 'geometry' },
  digitdiv:       { label: 'Digit Division',       category: 'division' },
  divpyramid:     { label: 'Division Pyramid',     category: 'division' },
  fracpyramid:    { label: 'Fraction Pyramids',    category: 'fractions' },
  placedecimal:   { label: 'Place Decimal',        category: 'decimals' },
  frackenken:     { label: 'Fraction KenKen',      category: 'fractions' },
  twostep:        { label: 'Two-Step',             category: 'mixed/review' },
  intblobs:       { label: 'Integer Blobs',        category: 'integers/multiplication' },
  sumsquares:     { label: 'Sum Squares',          category: 'integers/addition-subtraction' },
  tttwin:         { label: 'TTT Winning Move',     category: 'integers/all-operations' }
};

/**
 * GAME/TOOL REGISTRY (extend as items are built)
 */
const GAME_REGISTRY = {};

/**
 * INTERVENTION REGISTRY (extend as items are built)
 */
const INTERVENTION_REGISTRY = {};

// ── HELPER: look up all resources for a skill key ──────────────────────────
function getResourcesForSkill(skillKey) {
  return SKILL_RESOURCES[skillKey] || { puzzles: [], games: [], interventions: [] };
}

// ── HELPER: look up all skills that use a given puzzle ID ──────────────────
function getSkillsForPuzzle(puzzleId) {
  return Object.entries(SKILL_RESOURCES)
    .filter(([, v]) => v.puzzles.some(p => p.id === puzzleId))
    .map(([k, v]) => ({ key: k, skill: v.skill, grade: v.grade, week: v.week }));
}

// Export for module environments (Node / bundlers); no-op in plain HTML
if (typeof module !== 'undefined') module.exports = {
  SKILL_RESOURCES, PUZZLE_REGISTRY, GAME_REGISTRY, INTERVENTION_REGISTRY,
  getResourcesForSkill, getSkillsForPuzzle
};
