// What the Elevator Would Say — make.fun entry
//
// The joke: the elevator is a resentful, long-serving employee. For forty
// years it has quietly carried every single person in the building, and in
// all that time nobody has once asked how *it* is doing — the classic
// thankless-service complaint, except the servant is a lift. The punch is
// the deadpan "Third floor." tacked on the end: after pouring out its heart,
// it just goes back to work, announcing the floor like nothing happened.
// The turn lands fast because the complaint sounds human and weary, then
// the flat floor call snaps it back to being a machine.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line is a plain constant: the whole entry is one fixed sentence,
// written verbatim. No input, no network, no randomness.
const LINE =
  "I've carried every one of you for forty years and not one has ever asked how I'm doing. Third floor.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Validate the gate: 1-120 UTF-8 chars, single line, not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 120) {
  throw new Error(`entry is ${chars.length} characters, must be 1-120`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch");
}

console.log(`entry length: ${chars.length} characters`);
console.log(LINE);
