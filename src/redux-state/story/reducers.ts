import {
    NEW_STORY,
    CREATE_STORY,
    UPDATE_STORY,
    DELETE_STORY,
    UPLOAD_STORY,
    SELECT_STORY,
    FETCH_STORIES,
    StoryActionTypes,
    Story,
    CLEAR_STORIES,
    UPDATE_AUTHOR,
 } from "./types";

export const initialStoriesState = {
    stories: [],
    currentStory: {}
};

function stories (state = initialStoriesState, action: StoryActionTypes) {
    switch (action.type) {
        case NEW_STORY:
            return {
                stories: state.stories,
                currentStory: {}
            }
        case CREATE_STORY:
            return {
                stories: [
                    ...state.stories,
                    {
                        id: state.stories.length+1,
                        ...action.payload
                    }
                ],
                currentStory: {
                    id: state.stories.length+1,
                    ...action.payload
                }
            };
        case UPDATE_STORY:
            const updatedStories = state.stories.map((entry: Story) => entry.id === action.payload.id ? action.payload : entry);
            const currentStory = action.payload;
            return {
                stories: updatedStories,
                currentStory
            }
        case SELECT_STORY:
            const story = state.stories.find((entry: Story) => entry.id === action.payload);
            return {
                stories: state.stories,
                currentStory: story
            }
        case DELETE_STORY:
            const deletedStories = state.stories.filter((entry: Story) => entry.id !== action.payload);
            return {
                stories: deletedStories,
                currentStory: {}
            };
        case CLEAR_STORIES:
            const clearedStories = state.stories.filter((entry: Story) => entry.author !== action.payload);
            return {
                stories: clearedStories,
                currentStory: {}
            }
        case UPDATE_AUTHOR:
            const newAuthoredStories = state.stories.map((entry: Story) => {
                if (entry.author === action.payload.author) {
                    return {
                        ...entry,
                        author: action.payload.newAuthor,
                    }
                }
                return entry;
            });
            return {
                stories: newAuthoredStories,
                currentStory: {}
            }
        case FETCH_STORIES:
        case UPLOAD_STORY:
        default:
            return state;
    }
}

export default stories;