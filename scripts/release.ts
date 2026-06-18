import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import process from 'node:process';

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));
const version: string = pkg.version;
const source: string = pkg.repository;

const params = new URLSearchParams({ title: `v${version}`, tag: `v${version}` });
const url = `${source}/releases/new?${params}`;

const opener =
	process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
execSync(`${opener} "${url}"`);
