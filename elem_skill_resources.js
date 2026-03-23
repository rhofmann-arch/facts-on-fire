/**
 * elem_skill_resources.js
 * K–4 Automaticity — Facts on Fire
 *
 * SINGLE SOURCE OF TRUTH for all K–4 skill↔resource linkages.
 *
 * Skill keys match the id field in workbook-generator.html's SKILLS array.
 * e.g.  sums6      = Sums to 6
 *       mult100    = Multiplication Facts to 100
 *       md_add_3wr = Multidigit Addition, 3-Digit With Regrouping
 *
 * Resource types:
 *   puzzle       — generated puzzle sheet (id matches workbook-generator.html puzzle ids)
 *   game         — interactive game or digital tool (id to be assigned when built)
 *   intervention — targeted intervention activity   (id to be assigned when built)
 *
 * Adding a new linkage:
 *   1. Find or create the skill key (matches SKILLS[].id in workbook-generator.html).
 *   2. Push an entry into the appropriate array (puzzles / games / interventions).
 *   3. Each entry: { id, label, notes }
 *      - id     : machine key used to invoke the puzzle  (e.g. 'honeycomb')
 *      - label  : human-readable display name            (e.g. 'Honeycomb Path')
 *      - notes  : optional context for teacher guides    (e.g. 'good for early intro')
 *
 * Puzzle pool reference (for pool-aware UI warnings):
 *   early      → Honeycomb Path, Cross-Number, Number Maze, 100 Triangles
 *   addsub     → + Mismo, Two-Out, X-Out, Factor Blob
 *   multdiv    → Mismo, Mega Mismo, Two-Out, X-Out, Factor Blob, Number Maze, 100 Triangles, Cross-Number
 *   multidigit → Cross-Number, Cryptarithms, Mismo, Mega Mismo, Factor Blob, Two-Out, Number Maze
 *
 * Last updated: Session 8 — 2026-03-23
 */

const ELEM_SKILL_RESOURCES = {

  // ── DOT TOTALS ─────────────────────────────────────────────────────────────
  // Pool: early (Honeycomb Path, Cross-Number, Number Maze, 100 Triangles)
  // No puzzle linkages defined yet — add here when ready.


  // ── ADDITION FACTS ─────────────────────────────────────────────────────────

  sums6: {
    skill: 'Sums to 6',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
    ],
    games: [], interventions: []
  },

  sums10: {
    skill: 'Sums to 10',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  sums18: {
    skill: 'Sums to 18',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
      { id: 'triangle',  label: '100 Triangles',  notes: '' },
    ],
    games: [], interventions: []
  },

  sums30: {
    skill: 'Sums to 30',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
      { id: 'triangle',  label: '100 Triangles',  notes: '' },
    ],
    games: [], interventions: []
  },


  // ── SUBTRACTION FACTS ──────────────────────────────────────────────────────

  sub10: {
    skill: 'Subtract from 10',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  sub18: {
    skill: 'Subtract from 18',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
      { id: 'mismo',     label: 'Mismo',          notes: '' },
    ],
    games: [], interventions: []
  },

  sub30: {
    skill: 'Subtract from 30',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
      { id: 'mismo',     label: 'Mismo',          notes: '' },
    ],
    games: [], interventions: []
  },


  // ── MULTIDIGIT ADDITION ────────────────────────────────────────────────────

  md_add_3nr: {
    skill: 'Multidigit Addition — 3-Digit, No Regrouping',
    pool: 'multidigit',
    puzzles: [
      { id: 'crossnum', label: 'Cross-Number',  notes: '' },
      { id: 'mismo',    label: 'Mismo',         notes: '' },
      { id: 'crypto',   label: 'Cryptarithms',  notes: '' },
      { id: 'twoout',   label: 'Two-Out',       notes: '' },
    ],
    games: [], interventions: []
  },

  md_add_2wr: {
    skill: 'Multidigit Addition — 2-Digit, With Regrouping',
    pool: 'multidigit',
    puzzles: [
      { id: 'twoout',     label: 'Two-Out',     notes: '' },
      { id: 'mismo',      label: 'Mismo',       notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',  notes: '' },
      { id: 'factorblob', label: 'Factor Blob', notes: '' },
      { id: 'crypto',     label: 'Cryptarithms',notes: '' },
    ],
    games: [], interventions: []
  },

  md_add_3wr: {
    skill: 'Multidigit Addition — 3-Digit, With Regrouping',
    pool: 'multidigit',
    puzzles: [
      { id: 'crypto',    label: 'Cryptarithms', notes: '' },
      { id: 'mismo',     label: 'Mismo',        notes: '' },
      { id: 'megamismo', label: 'Mega Mismo',   notes: '' },
      { id: 'twoout',    label: 'Two-Out',      notes: '' },
    ],
    games: [], interventions: []
  },


  // ── MULTIDIGIT SUBTRACTION ─────────────────────────────────────────────────

  md_sub_3nr: {
    skill: 'Multidigit Subtraction — 3-Digit, No Regrouping',
    pool: 'multidigit',
    puzzles: [
      { id: 'crossnum', label: 'Cross-Number',  notes: '' },
      { id: 'mismo',    label: 'Mismo',         notes: '' },
      { id: 'crypto',   label: 'Cryptarithms',  notes: '' },
      { id: 'twoout',   label: 'Two-Out',       notes: '' },
    ],
    games: [], interventions: []
  },

  md_sub_2wr: {
    skill: 'Multidigit Subtraction — 2-Digit, With Regrouping',
    pool: 'multidigit',
    puzzles: [
      { id: 'twoout',     label: 'Two-Out',     notes: '' },
      { id: 'mismo',      label: 'Mismo',       notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',  notes: '' },
      { id: 'factorblob', label: 'Factor Blob', notes: '' },
      { id: 'crypto',     label: 'Cryptarithms',notes: '' },
    ],
    games: [], interventions: []
  },

  md_sub_3wr: {
    skill: 'Multidigit Subtraction — 3-Digit, With Regrouping',
    pool: 'multidigit',
    puzzles: [
      { id: 'crypto',    label: 'Cryptarithms', notes: '' },
      { id: 'mismo',     label: 'Mismo',        notes: '' },
      { id: 'megamismo', label: 'Mega Mismo',   notes: '' },
      { id: 'twoout',    label: 'Two-Out',      notes: '' },
    ],
    games: [], interventions: []
  },


  // ── MULTIPLICATION FACTS ───────────────────────────────────────────────────

  mult18: {
    skill: 'Multiplication Facts to 18',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  mult36: {
    skill: 'Multiplication Facts to 36',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  mult49: {
    skill: 'Multiplication Facts to 49',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  mult100: {
    skill: 'Multiplication Facts to 100',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  mult144: {
    skill: 'Multiplication Facts to 144',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  mult225: {
    skill: 'Multiplication Facts to 225',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  mult400: {
    skill: 'Multiplication Facts to 400',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },


  // ── DIVISION FACTS ─────────────────────────────────────────────────────────

  div18: {
    skill: 'Division Facts to 18',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  div36: {
    skill: 'Division Facts to 36',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  div49: {
    skill: 'Division Facts to 49',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  div100: {
    skill: 'Division Facts to 100',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  div144: {
    skill: 'Division Facts to 144',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  div225: {
    skill: 'Division Facts to 225',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

  div400: {
    skill: 'Division Facts to 400',
    pool: 'multdiv',
    puzzles: [
      { id: 'mismo',      label: 'Mismo',          notes: '' },
      { id: 'megamismo',  label: 'Mega Mismo',     notes: '' },
      { id: 'twoout',     label: 'Two-Out',        notes: '' },
      { id: 'xout',       label: 'X-Out',          notes: '' },
      { id: 'factorblob', label: 'Factor Blob',    notes: '' },
      { id: 'maze',       label: 'Number Maze',    notes: '' },
      { id: 'triangle',   label: '100 Triangles',  notes: '' },
      { id: 'crossnum',   label: 'Cross-Number',   notes: '' },
    ],
    games: [], interventions: []
  },

};


// ── PUZZLE TYPE REGISTRY ─────────────────────────────────────────────────────
// Human-readable info for each puzzle type ID used in ELEM_SKILL_RESOURCES.
// Extend as new puzzle types are added to workbook-generator.html.

const ELEM_PUZZLE_REGISTRY = {
  honeycomb:  { label: 'Honeycomb Path',  pool: ['early','addsub'],              category: 'path/navigation' },
  crossnum:   { label: 'Cross-Number',    pool: ['early','addsub','multdiv','multidigit'], category: 'fill-in' },
  maze:       { label: 'Number Maze',     pool: ['early','addsub','multdiv','multidigit'], category: 'path/navigation' },
  triangle:   { label: '100 Triangles',   pool: ['early','addsub','multdiv'],     category: 'spatial/pattern' },
  mismo:      { label: 'Mismo',           pool: ['addsub','multdiv','multidigit'],category: 'balance/equality' },
  megamismo:  { label: 'Mega Mismo',      pool: ['multdiv','multidigit'],         category: 'balance/equality' },
  twoout:     { label: 'Two-Out',         pool: ['addsub','multdiv','multidigit'],category: 'elimination' },
  xout:       { label: 'X-Out',           pool: ['addsub','multdiv'],             category: 'elimination' },
  factorblob: { label: 'Factor Blob',     pool: ['addsub','multdiv','multidigit'],category: 'grouping/factoring' },
  crypto:     { label: 'Cryptarithms',    pool: ['multidigit'],                   category: 'deductive' },
};


// ── GAME REGISTRY ─────────────────────────────────────────────────────────────
// Extend as K–4 games are built.

const ELEM_GAME_REGISTRY = {};


// ── INTERVENTION REGISTRY ────────────────────────────────────────────────────

const ELEM_INTERVENTION_REGISTRY = {
  ccc:           { label: 'Cover-Copy-Compare',   pools: ['addsub','multdiv','multidigit'] },
  ff:            { label: 'Fact Families',         pools: ['addsub','multdiv','multidigit'] },
  factfamily:    { label: 'Fact Family Practice',  pools: ['multdiv'] },
  tablescaffold: { label: 'Table Scaffold',         pools: ['multidigit'] },
  touchmath:     { label: 'TouchMath',              pools: ['addsub'] },
  warpweft:      { label: 'Warp & Weft',            pools: ['addsub'] },
};


// ── HELPER FUNCTIONS ─────────────────────────────────────────────────────────

/**
 * Get all resources linked to a given skill ID.
 * @param {string} skillId — e.g. 'sums10', 'mult36', 'md_add_3wr'
 * @returns {object|null} resource object or null if not found
 */
function getElemResourcesForSkill(skillId) {
  return ELEM_SKILL_RESOURCES[skillId] || null;
}

/**
 * Get all skills that have a given puzzle type linked.
 * @param {string} puzzleId — e.g. 'honeycomb', 'crossnum'
 * @returns {string[]} array of skill IDs
 */
function getElemSkillsForPuzzle(puzzleId) {
  return Object.entries(ELEM_SKILL_RESOURCES)
    .filter(([, v]) => v.puzzles.some(p => p.id === puzzleId))
    .map(([k]) => k);
}
