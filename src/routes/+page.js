export const ssr = false;

import { getRandomWords } from '$lib/words';
import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
  const res = await fetch(`/langugages/english_1k.json`);

  if (!res.ok) {
    throw error(404);
  };

  const data = await res.json();
  const selectedWords = getRandomWords(data, 25);

  return {
    sentence: selectedWords.join(" "),
  };
}
