export const NEW_STORY = "NEW_STORY";
export const CLEAR_STORIES = "CLEAR_STORIES";
export const SELECT_STORY = "SELECT_STORY";
export const FETCH_STORIES = "FETCH_STORIES";
export const CREATE_STORY = "CREATE_STORY";
export const UPDATE_STORY = "UPDATE_STORY";
export const DELETE_STORY = "DELETE_STORY";
export const UPLOAD_STORY = "UPLOAD_STORY";
export const UPDATE_AUTHOR = "UPDATE_AUTHOR";

export type ID = number;
export type Timestamp = string;

export interface StoryPayload {
    author: string;
    title: string;
    createdAt: Timestamp;
    lastUpdated: Timestamp;
    content: string;
}

export interface Story extends StoryPayload {
    id: ID;
}

export interface NewStoryReturn {
    type: typeof NEW_STORY;
}

export interface SelectStoryReturn {
    type: typeof SELECT_STORY;
    payload: ID;
}

export interface FetchStoriesReturn {
    type: typeof FETCH_STORIES;
}

export interface CreateStoryReturn {
    type: typeof CREATE_STORY;
    payload: Story;
}

export interface UpdateStoryReturn {
    type: typeof UPDATE_STORY;
    payload: Story;
}

export interface DeleteStoryReturn {
    type: typeof DELETE_STORY;
    payload: ID;
}

export interface UploadStoryReturn {
    type: typeof UPLOAD_STORY;
    payload: ID;
}

export interface ClearStoriesReturn {
    type: typeof CLEAR_STORIES;
    payload: string;
}

export interface UpdateAuthorReturn {
    type: typeof UPDATE_AUTHOR;
    payload: {
        author: string;
        newAuthor: string;
    };
}

export type NewStoryAction = () => NewStoryReturn;
export type SelectStoryAction = (id: ID) => SelectStoryReturn;
export type FetchStoriesAction = (author: string) => FetchStoriesReturn;
export type ClearStoriesAction = (author: string) => ClearStoriesReturn;
export type CreateStoryAction = (story: StoryPayload) => CreateStoryReturn;
export type UpdateStoryAction = (story: Story) => UpdateStoryReturn;
export type UpdateAuthorAction = (author: string, newAuthor: string) => UpdateAuthorReturn;
export type DeleteStoryAction = (id: ID) => DeleteStoryReturn;

export type StoryActionTypes =
    | NewStoryReturn
    | SelectStoryReturn
    | FetchStoriesReturn
    | ClearStoriesReturn
    | CreateStoryReturn
    | UpdateStoryReturn
    | UpdateAuthorReturn
    | DeleteStoryReturn
    | UploadStoryReturn
;