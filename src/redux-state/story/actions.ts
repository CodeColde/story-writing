import { ID, SELECT_STORY, FETCH_STORIES, StoryPayload, NEW_STORY, CREATE_STORY, UPDATE_STORY, Story, DELETE_STORY, CLEAR_STORIES, UPDATE_AUTHOR } from "./types";

export function newStoryAction () {
    return {
        type: NEW_STORY
    }
}

export function selectStoryAction (id: ID) {
    return {
        type: SELECT_STORY,
        payload: id
    };
}

export function fetchStoryAction (author: string) {
    return {
        type: FETCH_STORIES,
        payload: author
    };
}

export function createStoryAction (story: StoryPayload) {
    return {
        type: CREATE_STORY,
        payload: story
    }
}

export function updateStoryAction (story: Story) {
    return {
        type: UPDATE_STORY,
        payload: story
    };
}

export function clearUserStoriesAction (author: string) {
    return {
        type: CLEAR_STORIES,
        payload: author
    }
}

export function deleteStoryAction (id: ID) {
    return {
        type: DELETE_STORY,
        payload: id
    }
}

export function updateAuthorAction (author: string, newAuthor: string) {
    return {
        type: UPDATE_AUTHOR,
        payload: {
            author, newAuthor
        }
    }
}