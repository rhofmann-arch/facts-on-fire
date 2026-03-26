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
 *   game         — interactive whole-class game or digital tool
 *   intervention — targeted intervention activity
 *
 * Adding a new linkage:
 *   1. Find or create the skill key (matches SKILLS[].id in workbook-generator.html).
 *   2. Push an entry into the appropriate array (puzzles / games / interventions).
 *   3. Each entry: { id, label, notes }
 *      - id     : machine key used to invoke the resource (e.g. 'honeycomb', 'ohno99')
 *      - label  : human-readable display name            (e.g. 'Honeycomb Path')
 *      - notes  : optional context for teacher guides
 *
 * Game registry fields:
 *   - id        : machine key
 *   - label     : display name
 *   - url       : filename to launch  (e.g. 'oh-no-99.html')
 *   - category  : short description of skill area
 *   - status    : 'live' | 'soon'  (default 'live')
 *   - universal : true if the tool works with ANY skill set.
 *                 Universal tools are NOT listed per-skill in games[].
 *                 They are displayed automatically on every skill row by the UI.
 *
 * Puzzle pool reference:
 *   early      → Honeycomb Path, Cross-Number, Number Maze, 100 Triangles
 *   addsub     → + Mismo, Two-Out, X-Out, Factor Blob
 *   multdiv    → Mismo, Mega Mismo, Two-Out, X-Out, Factor Blob, Number Maze, 100 Triangles, Cross-Number
 *   multidigit → Cross-Number, Cryptarithms, Mismo, Mega Mismo, Factor Blob, Two-Out, Number Maze
 *
 * Last updated: Session 10 — 2026-03-25
 */

const ELEM_SKILL_RESOURCES = {

  // ── NUMBER WRITING / EARLY ──────────────────────────────────────────────────
  // Pool: 'none' / 'early' — K counting and number recognition skills

  num1_5: {
    skill: 'Numbers 1–5',
    pool: 'none',
    puzzles: [],
    games: [
      { id: 'fillstairs', label: 'Fill the Stairs', notes: 'use Kindergarten mode — 5 stairs, die rolls 1–10' },
    ],
    interventions: []
  },

  num6_10: {
    skill: 'Numbers 6–10',
    pool: 'none',
    puzzles: [],
    games: [
      { id: 'fillstairs', label: 'Fill the Stairs', notes: 'use Kindergarten mode — 5 or 7 stairs, die rolls 1–10' },
    ],
    interventions: []
  },

  dot_totals: {
    skill: 'Dot Totals',
    pool: 'early',
    puzzles: [],
    games: [
      { id: 'fillstairs', label: 'Fill the Stairs', notes: 'use Kindergarten mode — great intro to ordering numbers 1–10' },
    ],
    interventions: []
  },


  // ── ADDITION FACTS ─────────────────────────────────────────────────────────

  sums6: {
    skill: 'Sums to 6',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
    ],
    games: [
      { id: 'fillstairs',  label: 'Fill the Stairs', notes: 'great number ordering warmup' },
      { id: 'fourstrikes', label: 'Four Strikes',    notes: 'use addition fact set' },
    ],
    interventions: []
  },

  sums10: {
    skill: 'Sums to 10',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
    ],
    games: [
      { id: 'fillstairs',  label: 'Fill the Stairs', notes: '' },
      { id: 'savetwenty',  label: 'Save Twenty',     notes: 'dice sum stays ≤ 20' },
      { id: 'fourstrikes', label: 'Four Strikes',    notes: 'use addition fact set' },
      { id: 'strikeout',   label: 'Strike it Out',   notes: 'number line 0–20, add and subtract' },
    ],
    interventions: []
  },

  sums18: {
    skill: 'Sums to 18',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
      { id: 'triangle',  label: '100 Triangles',  notes: '' },
    ],
    games: [
      { id: 'fillstairs',  label: 'Fill the Stairs', notes: '' },
      { id: 'savetwenty',  label: 'Save Twenty',     notes: '' },
      { id: 'ohno99',      label: 'Oh No! 99!',      notes: 'running total to 99; good mental math challenge' },
      { id: 'fourstrikes', label: 'Four Strikes',    notes: 'use addition fact set' },
    ],
    interventions: []
  },

  sums30: {
    skill: 'Sums to 30',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
      { id: 'triangle',  label: '100 Triangles',  notes: '' },
    ],
    games: [
      { id: 'savetwenty',  label: 'Save Twenty',  notes: '' },
      { id: 'ohno99',      label: 'Oh No! 99!',   notes: '' },
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use addition fact set' },
    ],
    interventions: []
  },


  // ── SUBTRACTION FACTS ──────────────────────────────────────────────────────

  sub10: {
    skill: 'Subtract from 10',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
    ],
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use subtraction fact set' },
      { id: 'strikeout',   label: 'Strike it Out', notes: 'number line 0–20, sum and difference' },
    ],
    interventions: []
  },

  sub18: {
    skill: 'Subtract from 18',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
      { id: 'mismo',     label: 'Mismo',          notes: '' },
    ],
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use subtraction fact set' },
    ],
    interventions: []
  },

  sub30: {
    skill: 'Subtract from 30',
    pool: 'addsub',
    puzzles: [
      { id: 'honeycomb', label: 'Honeycomb Path', notes: '' },
      { id: 'crossnum',  label: 'Cross-Number',   notes: '' },
      { id: 'mismo',     label: 'Mismo',          notes: '' },
    ],
    games: [
      { id: 'ohno99',      label: 'Oh No! 99!',   notes: 'Jacks subtract 10 — good sub practice' },
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use subtraction fact set' },
    ],
    interventions: []
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
    games: [],
    interventions: []
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
    games: [
      { id: 'ohno99', label: 'Oh No! 99!', notes: 'running 2-digit totals; connects directly to regrouping skills' },
    ],
    interventions: []
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
    games: [
      { id: 'ohno99', label: 'Oh No! 99!', notes: '' },
    ],
    interventions: []
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
    games: [],
    interventions: []
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
    games: [
      { id: 'ohno99', label: 'Oh No! 99!', notes: 'Jacks subtract 10; mirrors regrouping mechanics' },
    ],
    interventions: []
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
    games: [
      { id: 'ohno99', label: 'Oh No! 99!', notes: '' },
    ],
    interventions: []
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
    games: [
      { id: 'seqpuzzles',  label: 'Sequence Puzzles', notes: 'skip-count sequences ×2–×4 intro' },
      { id: 'choralcount', label: 'Choral Counting',  notes: 'use ×2–×4 intervals' },
      { id: 'fourstrikes', label: 'Four Strikes',     notes: 'use multiplication fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all mult fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'seqpuzzles',  label: 'Sequence Puzzles', notes: 'skip-count sequences ×2–×6' },
      { id: 'choralcount', label: 'Choral Counting',  notes: 'use ×2–×6 intervals' },
      { id: 'fourstrikes', label: 'Four Strikes',     notes: 'use multiplication fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all mult fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'seqpuzzles',  label: 'Sequence Puzzles', notes: 'skip-count sequences ×2–×7' },
      { id: 'fourstrikes', label: 'Four Strikes',     notes: 'use multiplication fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all mult fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'seqpuzzles',  label: 'Sequence Puzzles', notes: 'skip-count sequences ×2–×10' },
      { id: 'choralcount', label: 'Choral Counting',  notes: 'use ×2–×10 intervals' },
      { id: 'fourstrikes', label: 'Four Strikes',     notes: 'use multiplication fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all mult fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'seqpuzzles',  label: 'Sequence Puzzles', notes: 'skip-count sequences ×2–×12' },
      { id: 'fourstrikes', label: 'Four Strikes',     notes: 'use multiplication fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all mult fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'seqpuzzles',  label: 'Sequence Puzzles', notes: 'all skip-count levels' },
      { id: 'fourstrikes', label: 'Four Strikes',     notes: 'use multiplication fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all mult fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use multiplication fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all mult fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use division fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all div fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use division fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all div fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use division fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all div fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use division fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all div fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use division fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all div fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use division fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all div fact levels' },
    ],
    interventions: []
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
    games: [
      { id: 'fourstrikes', label: 'Four Strikes', notes: 'use division fact set' },
      { id: 'oddsthrees', label: 'Odds & Threes', notes: 'all div fact levels' },
    ],
    interventions: []
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
// Fields:
//   label     : display name shown in UI chips
//   url       : filename of the game (relative to index.html)
//   category  : short description of skill area
//   status    : 'live' | 'soon'
//   universal : true = applies to all skills; UI shows these on every row automatically.
//               Do NOT add universal games to individual skill games[] arrays.

const ELEM_GAME_REGISTRY = {

  // ── Specific-skill games ────────────────────────────────────────────────────
  fourstrikes: {
    label:    'Four Strikes',
    url:      'four-strikes.html',
    category: 'any fact set',
    status:   'live',
  },
  ohno99: {
    label:    'Oh No! 99!',
    url:      'oh-no-99.html',
    category: 'mental add/sub · multidigit',
    status:   'live',
  },
  fillstairs: {
    label:    'Fill the Stairs',
    url:      'fill-the-stairs.html',
    category: 'number sense · ordering · K mode 1–10',
    status:   'live',
  },
  savetwenty: {
    label:    'Save Twenty',
    url:      'save-twenty.html',
    category: 'addition · estimation',
    status:   'live',
  },
  seqpuzzles: {
    label:    'Sequence Puzzles',
    url:      'sequence_puzzles.html',
    category: 'mult readiness · skip-counting',
    status:   'live',
  },
  choralcount: {
    label:    'Choral Counting',
    url:      'choral_counting.html',
    category: 'mult readiness · skip-counting',
    status:   'live',
  },
  strikeout: {
    label:    'Strike it Out',
    url:      'strike-it-out.html',
    category: 'addition · subtraction · number sense',
    status:   'live',
  },
  oddsthrees: {
    label:    'Odds & Threes',
    url:      'odds-and-threes.html',
    category: 'multiplication · division · number properties',
    status:   'live',
  },

  // ── Universal tools (shown on every skill row automatically) ────────────────
  beatthetape: {
    label:     'Beat the Tape',
    url:       'beat_the_tape.html',
    category:  'any fact set · choral drill',
    status:    'live',
    universal: true,
  },
  classchallenge: {
    label:     'Class Challenge',
    url:       'class_reward_app.html',
    category:  'any fact set · reward reveal',
    status:    'live',
    universal: true,
  },

};


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
 * Note: universal games from ELEM_GAME_REGISTRY are NOT included here —
 * they apply to every skill. Use getElemUniversalGames() for those.
 * @param {string} skillId — e.g. 'sums10', 'mult36', 'md_add_3wr'
 * @returns {object|null}
 */
function getElemResourcesForSkill(skillId) {
  return ELEM_SKILL_RESOURCES[skillId] || null;
}

/**
 * Get all universal games (tools that work with any skill).
 * @returns {Array<{id: string, entry: object}>}
 */
function getElemUniversalGames() {
  return Object.entries(ELEM_GAME_REGISTRY)
    .filter(([, v]) => v.universal === true)
    .map(([id, entry]) => ({ id, ...entry }));
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

/**
 * Get all skills that have a given game linked (non-universal linkages only).
 * @param {string} gameId — e.g. 'ohno99', 'fourstrikes'
 * @returns {string[]} array of skill IDs
 */
function getElemSkillsForGame(gameId) {
  return Object.entries(ELEM_SKILL_RESOURCES)
    .filter(([, v]) => v.games.some(g => g.id === gameId))
    .map(([k]) => k);
}
