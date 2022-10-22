interface Verse {
    chapter_id: number
    chapter_number: number
    externalId: number
    id: number
    text: string
    title: string
    verse_number: number
    verse_order: number
    transliteration: string
    word_meanings: string
}

interface Chapter {
    chapter_number: number
    chapter_summary: string
    chapter_summary_hindi: string
    id: number
    image_name: string
    name: string
    name_meaning: string
    name_translation: string
    name_transliterated: string
    verses_count: number
}
