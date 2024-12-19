const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "e@e.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile and submit the monthly sales report.",
        taskDate: "2024-12-20",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Inventory",
        taskDescription: "Update the stock count in the inventory system.",
        taskDate: "2024-12-22",
        category: "Inventory",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Client Meeting",
        taskDescription:
          "Attend the meeting with the client to discuss project updates.",
        taskDate: "2024-12-21",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Anjali",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Submit Expense Report",
        taskDescription: "Provide details of the monthly expenses for review.",
        taskDate: "2024-12-19",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "System Maintenance",
        taskDescription: "Perform routine maintenance on the company's server.",
        taskDate: "2024-12-20",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Create slides for the annual review meeting.",
        taskDate: "2024-12-25",
        category: "Reports",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Vikram",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Conduct Interview",
        taskDescription: "Interview a candidate for the open developer role.",
        taskDate: "2024-12-18",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Onboard New Employee",
        taskDescription: "Assist the new hire with the onboarding process.",
        taskDate: "2024-12-19",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Update Project Plan",
        taskDescription: "Revise timelines and milestones for the new project.",
        taskDate: "2024-12-20",
        category: "Projects",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Review Code",
        taskDescription: "Review the code for the new feature implementation.",
        taskDate: "2024-12-18",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Stand-Up",
        taskDescription: "Host the daily team stand-up meeting.",
        taskDate: "2024-12-19",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Fix Bug #123",
        taskDescription: "Resolve the reported issue in the production system.",
        taskDate: "2024-12-20",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Priya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Market Analysis",
        taskDescription: "Research market trends for the quarterly report.",
        taskDate: "2024-12-19",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Organize Event",
        taskDescription: "Plan the upcoming company team-building event.",
        taskDate: "2024-12-22",
        category: "Events",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Update Social Media",
        taskDescription: "Post updates on the company's social media accounts.",
        taskDate: "2024-12-20",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Ramesh",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
