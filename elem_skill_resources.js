/**
 * elem_skill_resources.js
 * Elementary Automaticity — Facts on Fire / M.I.N.D. 2.0
 *
 * SINGLE SOURCE OF TRUTH for all skill↔resource linkages, Grades K–4.
 *
 * Skill keys use stable format:  g{grade}w{week}
 *   e.g.  gKw1  = Grade K Week 1  (Numbers 1–5)
 *         g3w7  = Grade 3 Week 7   (Multiplication facts to 100)
 *
 * Resource types:
 *   puzzle       — generated puzzle sheet
 *   game         — interactive game or digital tool (id assigned when built)
 *   intervention — targeted intervention activity
 *
 * Adding a new linkage:
 *   Use the Skill Resource Manager UI (elem_skill_resource_manager.html),
 *   then export and replace the SKILL_RESOURCES block below.
 *
 * Last updated: 2026-03-23
 */

const SKILL_RESOURCES = {

  // ── GRADE K ──────────────────────────────────────────────────────────────

  // No puzzle-specific linkages yet — number writing weeks have no puzzle pool.
  // Add skill-specific assignments here as puzzles are developed.

  // ── GRADE 1 ──────────────────────────────────────────────────────────────

  // ── GRADE 2 ──────────────────────────────────────────────────────────────

  // ── GRADE 3 ──────────────────────────────────────────────────────────────

  // ── GRADE 4 ──────────────────────────────────────────────────────────────

};

/**
 * PUZZLE TYPE REGISTRY
 * Human-readable info for each puzzle type available in the elementary workbook generator.
 * Extend via the Skill Resource Manager UI.
 */
const PUZZLE_REGISTRY = {
  honeycomb:  { label: 'Honeycomb Path',  category: 'add/sub facts',          pool: ['early','addsub'] },
  crossnum:   { label: 'Cross-Number',    category: 'all types',              pool: ['early','addsub','multdiv','multidigit'] },
  maze:       { label: 'Number Maze',     category: 'all types',              pool: ['early','addsub','multdiv','multidigit'] },
  triangle:   { label: '100 Triangles',   category: 'add/sub, mult/div',      pool: ['early','addsub','multdiv'] },
  mismo:      { label: 'Mismo',           category: 'add/sub, mult/div, multidigit', pool: ['addsub','multdiv','multidigit'] },
  megamismo:  { label: 'Mega Mismo',      category: 'mult/div, multidigit',   pool: ['multdiv','multidigit'] },
  twoout:     { label: 'Two-Out',         category: 'add/sub, mult/div, multidigit', pool: ['addsub','multdiv','multidigit'] },
  xout:       { label: 'X-Out',           category: 'add/sub, mult/div',      pool: ['addsub','multdiv'] },
  factorblob: { label: 'Factor Blob',     category: 'add/sub, mult/div, multidigit', pool: ['addsub','multdiv','multidigit'] },
  crypto:     { label: 'Cryptarithms',    category: 'multidigit',             pool: ['multidigit'] },
};

/**
 * INTERVENTION REGISTRY
 * Intervention types available in the elementary workbook generator.
 * Extend via the Skill Resource Manager UI.
 */
const INTERVENTION_REGISTRY = {
  ccc:           { label: 'Cover-Copy-Compare',  abbrev: 'CCC',  applicableTo: ['addsub','multdiv','multidigit'] },
  factfamilies:  { label: 'Fact Families',        abbrev: 'FF',   applicableTo: ['addsub','multdiv'] },
  factfamprac:   { label: 'Fact Family Practice', abbrev: 'FFP',  applicableTo: ['multdiv'] },
  tablescaffold: { label: 'Table Scaffold',        abbrev: 'TS',   applicableTo: ['multidigit'] },
  touchmath:     { label: 'TouchMath',             abbrev: 'TM',   applicableTo: ['addsub'] },
  warpweft:      { label: 'Warp & Weft',           abbrev: 'WW',   applicableTo: ['addsub'] },
};

/**
 * GAME REGISTRY (extend as items are built)
 */
const GAME_REGISTRY = {};

// ── HELPERS ───────────────────────────────────────────────────────────────────
function getResourcesForSkill(skillKey) {
  return SKILL_RESOURCES[skillKey] || { puzzles: [], games: [], interventions: [] };
}

function getSkillsForPuzzle(puzzleId) {
  return Object.entries(SKILL_RESOURCES)
    .filter(([, v]) => v.puzzles.some(p => p.id === puzzleId))
    .map(([k, v]) => ({ key: k, skill: v.skill, grade: v.grade, week: v.week }));
}

if (typeof module !== 'undefined') module.exports = {
  SKILL_RESOURCES, PUZZLE_REGISTRY, INTERVENTION_REGISTRY, GAME_REGISTRY,
  getResourcesForSkill, getSkillsForPuzzle
};
