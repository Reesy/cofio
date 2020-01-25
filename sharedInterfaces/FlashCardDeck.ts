
export interface FlashCardDeck
{
    /**
     * The ID {GUID} of the flashcard deck
     */
    ID: string;

    /**
     * The name of the deck to be displayed
     */
    name: string;

    /**
     *  The flashcards that belong to the deck 
     */
    flashCards: Array<string>;
}