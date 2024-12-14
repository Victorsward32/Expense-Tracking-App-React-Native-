import { ExpensesIcon, Images } from "./ImageConstant";

const financialCourses = {
    Introductive: [
        {
            id: 1,
            title: "Budgeting 101",
            description: "This course would cover the basics of budgeting, including how to create a budget, how to track expenses, and how to stay within a budget.",
            image: Images.moneyAndPhone,
            buttonText: "Play",
            containerStyle: { backgroundColor: "#eab676" }, // Light orange background
        },
    ],
    Intermediate: [
        {
            id: 1,
            title: "Saving Strategies",
            description: "This course would focus on various strategies for saving money, such as automating savings, reducing expenses, and setting savings goals.",
            image: Images.checkMachine,
            buttonText: "Completed",
            containerStyle: { backgroundColor: "#8BCEFF" }, // Light green background
        },
        {
            id: 2,
            title: "Investing Basics",
            description: "This course would cover the basics of investing, including how to invest in stocks, bonds, and mutual funds.",
            image: Images.openHomeSafe,
            buttonText: "Play",
            containerStyle: { backgroundColor: "#8BCEFF" }, // Light orange background
        },
        {
            id: 3,
            title: "Debt Management",
            description: "This course would cover strategies for managing debt, including how to pay off debt and how to improve your credit score.",
            image: Images.addNewUserWindow,
            buttonText: "Play",
            containerStyle: { backgroundColor: "#8BCEFF" }, // Light red/pink background
        },
        {
            id: 4,
            title: "Retirement Planning",
            description: "This course would cover the essentials of retirement planning, including how to calculate retirement savings needs.",
            image: Images.wadofMoney,
            buttonText: "Play",
            containerStyle: { backgroundColor: "#8BCEFF" }, // Light blue background
        },
    ],
    Advance: [
        {
            id: 1,
            title: "Credit and Loans",
            description: "This course would focus on understanding credit scores, how to manage loans, and how to use credit responsibly.",
            image: Images.girlPlanningBudget,
            buttonText: "Completed",
            containerStyle: { backgroundColor: "#FFF6E5" }, // Light yellow background
        },
        {
            id: 2,
            title: "Financial Planning for Life Events",
            description: "This course would cover financial planning for major life events, such as marriage, buying a home, or having a child.",
            image: Images.walletWithCoin,
            buttonText: "Completed",
            containerStyle: { backgroundColor: "#FFF6E5" }, // Light orange background
        },
        {
            id: 3,
            title: "Estate Planning",
            description: "This course would cover the basics of estate planning, including creating a will, setting up trusts, and planning for end-of-life care.",
            image: Images.youngwomansittingofloorinheadphones,
            buttonText: "Completed",
            containerStyle: { backgroundColor: "#FFF6E5" }, // Light purple background
        },
        {
            id: 4,
            title: "Financial Wellness",
            description: "This course would cover strategies for improving overall financial wellness, including developing healthy financial habits and managing financial stress.",
            image: Images.piggyBank,
            buttonText: "Completed",
            containerStyle: { backgroundColor: "#FFF6E5" }, // Light blue background
        },
    ],
};

export default financialCourses;

export const ExpendatureList = {
    HouseholdExpenses: [
        {
            id: 1,
            Icon: ExpensesIcon.rent,
            Option: "Rent/Mortgage"
        },
        {
            id: 2,
            Icon:ExpensesIcon.Router_Internet,
            Option: "Internet and Cable"
        },
        {
            id: 3,
            Icon: ExpensesIcon.mechaninc,
            Option: "Maintenance/Repairs"
        },
        {
            id: 4,
            Icon: ExpensesIcon.ElectricalSystem,
            Option: "Electricity Bill"
        },
        {
            id: 5,
            Icon: ExpensesIcon.Water_bill,
            Option: "Water Bill"
        },
        {
            id: 6,
            Icon: ExpensesIcon.houseGasCylinder,
            Option: "Gas Bill"
        },
        {
            id: 7,
            Icon: ExpensesIcon.shoppingVehicle,
            Option: "Grocery"
        },

    ],
    Transportation: [
        {
            id: 1,
            Icon: ExpensesIcon.GasStationPetrol,
            Option: "Fuel/Gas",
        },
        {
            id: 2,
            Icon: ExpensesIcon.Debt,
            Option: "Vehicle Loan/Lease Payments",
        },
        {
            id: 3,
            Icon: ExpensesIcon.Train_publicTransport,
            Option: "Public Transportation",
        },
        {
            id: 4,
            Icon: ExpensesIcon.uberlikeTransportaion,
            Option: "Ride-sharing Services",
        },
        {
            id: 5,
            Icon: ExpensesIcon.mechaninc,
            Option: "Vehicle Maintenance",
        },
    ],
    HealthandWellness: [
        {
            id:1,
            Icon:ExpensesIcon.Medicines,
            Option:"Medications"
        },
        {
            id:2,
            Icon:ExpensesIcon.Medication,
            Option:"Medical Bills"
        },
        {
            id:3,
            Icon:ExpensesIcon.gymFitness,
            Option:"Fitness Memberships"
        },
        
    ],
    Insurance: [
        {
            id:1,
            Icon:ExpensesIcon.MedicleInsurance,
            Option:"Health Insurance"
        },
        {
            id:2,
            Icon:ExpensesIcon.termlifeInsurance,
            Option:"Life Insurance"
        },
        {
            id:3,
            Icon:ExpensesIcon.Carinsurance,
            Option:"Vehicle Insurance"
        },
        {
            id:4,
            Icon:ExpensesIcon.travelInsurance,
            Option:"Travel Insurance"
        },
        {
            id:5,
            Icon:ExpensesIcon.HomeInsurance,
            Option:"Home Insurance"
        },
    ],
    PersonalandFamilyCare: [
        {
            id:1,
            Icon:ExpensesIcon.babySittings,
            Option:"Babysitting"
        },
        {
            id:3,
            Icon:ExpensesIcon.Barber,
            Option:"Personal Care"
        },
        {
            id:4,
            Icon:ExpensesIcon.clothsShopping,
            Option:"Clothing"
        },
    ],
    Education:[
        {
            id:1,
            Icon:ExpensesIcon.School,
            Option:"School",
        },
        {
            id:2,
            Icon:ExpensesIcon.DiploamaAndDegree,
            Option:"Degree",
        },
        {
            id:3,
            Icon:ExpensesIcon.OnlineCourses,
            Option:"Online Courses",
        },
        {
            id:4,
            Icon:ExpensesIcon.PersonalTeaching,
            Option:"Private Tutor",
        },
        {
            id:5,
            Icon:ExpensesIcon.Univercity,
            Option:"University",
        },

    ],
    EntertainmentandLeisure: [
        {
            id:1,
            Icon:ExpensesIcon.subscription,
            Option:"Subscriptions(Netflix,OnlyFans)",
        },
        {
            id:2,
            Icon:ExpensesIcon.movies,
            Option:"Theater",
        },
        {
            id:3,
            Icon:ExpensesIcon.restaurents,
            Option:"Dining Out",
        },
        {
            id:4,
            Icon:ExpensesIcon.fastFood,
            Option:"Fast Food",
        },
        {
            id:5,
            Icon:ExpensesIcon.party,
            Option:"Party",
        },
    ],
    SavingsandInvestments: [
        {
            id:1,
            Icon:ExpensesIcon.emergencyFund,
            Option:"Emergency Fund Contributions"
        },
        {
            id:2,
            Icon:ExpensesIcon.retirementFund,
            Option:"Retirement Savings"
        },
        {
            id:3,
            Icon:ExpensesIcon.Investment,
            Option:"Investments"
        },
        {
            id:4,
            Icon:ExpensesIcon.OnlineLearning,
            Option:"Education Savings"
        },
    ],
    DebtPayments: [
        {
            id:1,
            Icon:ExpensesIcon.creditCard,
            Option:"Credit Card Payments"
        },
        {
            id:2,
            Icon:ExpensesIcon.Debt,
            Option:"Loan"
        },
    ],
    MiscellaneousExpenses: [
        {
            id:1,
            Icon:ExpensesIcon.gift,
            Option:"Gifts"
        },
        {
            id:2,
            Icon:ExpensesIcon.Travel,
            Option:"Travel/Vacations"
        },
        {
            id:3,
            Icon:ExpensesIcon.PetFood,
            Option:"Pet Care"
        },
        {
            id:4,
            Icon:ExpensesIcon.HomeDecure,
            Option:"Home Improvement"
        },
        
    ],
    BusinessRelatedExpenses: [
        {
            id:1,
            Icon:ExpensesIcon.OfficeSupplies,
            Option:"Office Supplies"
        },
        {
            id:2,
            Icon:ExpensesIcon.membership,
            Option:"Professional Memberships"
        },
        {
            id:3,
            Icon:ExpensesIcon.CountinueEducation,
            Option:"Continuing Education"
        },
        {
            id:4,
            Icon:ExpensesIcon.BusinessTravel,
            Option:"Business Travel"
        },
    ]
}
