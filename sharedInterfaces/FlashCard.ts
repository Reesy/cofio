
export interface FlashCard
{
    /**
     * The ID {GUID} of the flashcard
     */
    ID: string;

    /**
     * The front portion of the flashcard
     */
    front: string;

    /**
     * The back portion of the flashcard
     */
    back: string;
}