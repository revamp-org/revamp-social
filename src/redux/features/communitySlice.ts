import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommunityState {
	isMyCommunity: boolean;
	communityChanged: boolean;
	communityGoalUpdated: boolean;
	communityJournalUpdated?: boolean;
}

const communityState: CommunityState = {
	isMyCommunity: false,
	communityChanged: false,
	communityGoalUpdated: false,
};

export const community = createSlice({
	name: "community",
	initialState: communityState, // This is where you provide the initial state
	reducers: {
		setIsMyCommunity: (state, action: PayloadAction<boolean>) => {
			state.isMyCommunity = action.payload;
		},
		setCommunityChanged: state => {
			state.communityChanged = !state.communityChanged;
		},
		setCommunityGoalUpdated: state => {
			state.communityGoalUpdated = !state.communityGoalUpdated;
		},

		setCommunityJournalUpdated: state => {
			state.communityJournalUpdated = !state.communityJournalUpdated;
		},
	},
});

export const {
	setIsMyCommunity,
	setCommunityChanged,
	setCommunityGoalUpdated,
	setCommunityJournalUpdated,
} = community.actions;
export default community.reducer;
