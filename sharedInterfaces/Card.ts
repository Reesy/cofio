
export interface Card
{
    /**
     * The ID {GUID} of the flashcard
     */
    id: string;

    /**
     * The front portion of the flashcard
     */
    front: string;

    /**
     * The back portion of the flashcard
     */
    back: string;

    /**
     * Path to any associated audio with the flash card
     */
    audio: string;

    /**
     * Path to any associated Image for the flash card
     */
    image: string;

    /**
     * Interval
     */
    interval: number;
}