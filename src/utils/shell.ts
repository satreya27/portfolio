import React from 'react';
import * as bin from './bin';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const args = command.toLocaleLowerCase();
  //args[0] = args[0].toLowerCase();

  if (args === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(bin).indexOf(args) === -1) {
    setHistory(
      `shell: command not found: '${args}'. Try 'help' to get started.`,
    );
  } else {
    const output = await bin[args](args.slice(1));
    setHistory(output);
  }

  setCommand('');
};
