export const ssr = false;

import { VALID_LANGS } from '$lib/constants';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  let lang = "english"
  const selectedLang = localStorage.getItem("selectedLang")

  if (selectedLang != null) {
    let parsedLang = JSON.parse(selectedLang)

    if (typeof parsedLang === "string" && VALID_LANGS.includes(parsedLang)) {
      lang = parsedLang
    }
  }

  const res = await fetch(`/data/${lang}.json`)
  const data = await res.json()
  const index = Math.floor(Math.random() * data.length)

  return {
    quote: data[index].text,
  };
}
