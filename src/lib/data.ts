export const goalData = [
	{
		goalId: 1,
		title: "Learn a New Instrument",
		description: "Master the guitar",
		priority: "high",
		relatedArea: "Music",
		streak: 64,
		status: "active",
		deadline: "2023-12-15T18:00:00.000Z",
		createdAt: "2023-11-10T09:30:00.000Z",
		order: 1,
		userId: "user123",
	},
	{
		goalId: 2,
		title: "Get in Shape",
		description: "Lose 10 pounds and build muscle",
		priority: "medium",
		relatedArea: "Fitness",
		streak: 54,
		status: "inactive",
		deadline: "2024-01-31T23:59:59.999Z",
		createdAt: "2023-11-10T10:15:00.000Z",
		order: 2,
		userId: "user456",
	},
	{
		goalId: 3,
		title: "Read More Books",
		description: "Read at least 30 books this year",
		priority: "low",
		relatedArea: "Reading",
		streak: 12,
		status: "active",
		deadline: null,
		createdAt: "2023-11-10T11:20:00.000Z",
		order: 3,
		userId: "user789",
	},
	{
		goalId: 4,
		title: "Travel the World",
		description: "Visit 10 different countries",
		priority: "high",
		relatedArea: "Travel",
		streak: 5,
		status: "inactive",
		deadline: "2024-12-31T23:59:59.999Z",
		createdAt: "2023-11-10T12:45:00.000Z",
		order: 4,
		userId: "user123",
	},
	{
		goalId: 5,
		title: "Learn Web Development",
		description: "Become a full-stack developer",
		priority: "high",
		relatedArea: "Programming",
		streak: 10,
		status: "active",
		deadline: null,
		createdAt: "2023-11-10T14:30:00.000Z",
		order: 5,
		userId: "user456",
	},
];

export const taskData = [
	{
		taskId: 1,
		title: "Practice Guitar Scales",
		description: "Daily practice for 30 minutes",
		priority: "high",
		deadline: "2023-12-15T18:00:00.000Z",
		createdAt: "2023-11-10T15:00:00.000Z",
		order: 1,
		streak: 64,
		goalId: 1,
	},
	{
		taskId: 2,
		title: "Gym Workout",
		description: "Strength and cardio training",
		priority: "medium",
		deadline: "2024-01-31T19:30:00.000Z",
		createdAt: "2023-11-10T16:30:00.000Z",
		order: 2,
		streak: 54,
		goalId: 2,
	},
	{
		taskId: 3,
		title: "Read 'The Great Gatsby'",
		description: "Complete by end of the month",
		priority: "low",
		deadline: "2023-11-30T23:59:59.999Z",
		createdAt: "2023-11-10T17:15:00.000Z",
		order: 3,
		streak: 12,
		goalId: 3,
	},
	{
		taskId: 4,
		title: "Plan Europe Trip",
		description: "Research and plan itinerary",
		priority: "medium",
		deadline: "2024-12-31T23:59:59.999Z",
		createdAt: "2023-11-10T18:45:00.000Z",
		order: 4,
		streak: 5,
		goalId: 4,
	},
	{
		taskId: 5,
		title: "Create Portfolio Website",
		description: "Showcase web development skills",
		priority: "high",
		deadline: null,
		createdAt: "2023-11-10T19:30:00.000Z",
		order: 5,
		streak: 10,
		goalId: 5,
	},
];

export const milestoneData = [
	{
		milestoneId: 1,
		milestone: "Finish Basics 1",
		taskId: 1,
	},
	{
		milestoneId: 2,
		milestone: "Practice Scales Daily",
		taskId: 1,
	},
	{
		milestoneId: 3,
		milestone: "Read Chapter 1",
		taskId: 3,
	},
	{
		milestoneId: 4,
		milestone: "Book Flight Tickets",
		taskId: 4,
	},
	{
		milestoneId: 5,
		milestone: "Create Homepage",
		taskId: 5,
	},
];

export const todoData = [
	{
		todoId: 1,
		todo: "Complete Lesson 1",
		isDone: false,
		createdAt: "2023-11-10T14:00:00.000Z",
		order: 1,
		taskId: 1,
	},
	{
		todoId: 2,
		todo: "Practice Fingerpicking",
		isDone: true,
		createdAt: "2023-11-10T15:30:00.000Z",
		order: 2,
		taskId: 1,
	},
	{
		todoId: 3,
		todo: "Find Book Recommendations",
		isDone: false,
		createdAt: "2023-11-10T17:00:00.000Z",
		order: 1,
		taskId: 3,
	},
	{
		todoId: 4,
		todo: "Book Accommodation",
		isDone: false,
		createdAt: "2023-11-10T19:00:00.000Z",
		order: 2,
		taskId: 4,
	},
	{
		todoId: 5,
		todo: "Design Contact Form",
		isDone: true,
		createdAt: "2023-11-10T20:30:00.000Z",
		order: 3,
		taskId: 5,
	},
];

export const journalData = [
	{
		journalId: 1,
		title: "Daily Journal - 2023-12-06",
		content: "This is the content of daily journal 1.",
		type: "daily",
		access: "private",
		date: "2023-12-06T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
	{
		journalId: 2,
		title: "Weekly Journal - 2023-12-05",
		content: "This is the content of weekly journal 1.",
		type: "weekly",
		access: "public",
		date: "2023-12-05T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
	{
		journalId: 3,
		title: "Monthly Journal - 2023-11-01",
		content: "This is the content of monthly journal 1.",
		type: "monthly",
		access: "friends",
		date: "2023-11-01T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
	{
		journalId: 4,
		title: "Daily Journal - 2023-12-04",
		content: "This is the content of daily journal 2.",
		type: "daily",
		access: "public",
		date: "2023-12-04T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
	{
		journalId: 5,
		title: "Weekly Journal - 2023-12-03",
		content: "This is the content of weekly journal 2.",
		type: "weekly",
		access: "private",
		date: "2023-12-03T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
	{
		journalId: 6,
		title: "Monthly Journal - 2023-10-01",
		content: "This is the content of monthly journal 2.",
		type: "monthly",
		access: "public",
		date: "2023-10-01T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
	{
		journalId: 7,
		title: "Daily Journal - 2023-12-02",
		content: "This is the content of daily journal 3.",
		type: "daily",
		access: "friends",
		date: "2023-12-02T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
	{
		journalId: 8,
		title: "Weekly Journal - 2023-12-01",
		content: "This is the content of weekly journal 3.",
		type: "weekly",
		access: "public",
		date: "2023-12-01T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
	{
		journalId: 9,
		title: "Monthly Journal - 2023-09-01",
		content: "This is the content of monthly journal 3.",
		type: "monthly",
		access: "private",
		date: "2023-09-01T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
	{
		journalId: 10,
		title: "Daily Journal - 2023-11-30",
		content: "This is the content of daily journal 4.",
		type: "daily",
		access: "public",
		date: "2023-11-30T12:00:00Z",
		comments: [],
		likedBy: [],
		sharedBy: [],
	},
];