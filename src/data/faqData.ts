import { IFAQItemDT } from "@/types/custom-interface";

export const faqItemsData: IFAQItemDT[] = [
    {
      id: "flush-collapseOne",
      question: "What services do you provide?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isOpen: false,
    },
    {
      id: "flush-collapseTwo",
      question: "Can I get a refund for my Premium Membership?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isOpen: true,
    },
    {
      id: "flush-collapseThree",
      question: "How does the Affiliate Program work?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isOpen: false,
    },
    {
      id: "flush-collapseFour",
      question: "What is included in the Standard membership plan?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      isOpen: false,
    },
  ];
  
 export const faqItemsDataTwo: IFAQItemDT[] = [
    {
        id: 'flush-collapseOne',
        question: 'What services do you provide?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 'flush-collapseTwo',
        question: 'Can I get a refund for my Premium Membership?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isOpen: true,
    },
    {
        id: 'flush-collapseThree',
        question: 'How does the Affiliate Program work?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 'flush-collapseFour',
        question: 'What is included in Standard membership plan?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

//Faq page items
interface FaqTab {
  id: string;
  label: string;
  content: FaqItem[];
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
export const faqTabItemsTwo: FaqTab[] = [
  {
    id: "general",
    label: "General Questions",
    content: [
      {
        id: "q1",
        question: "What is Livasa?",
        answer:
          "Livasa is a rental and accommodation service where you can rent housing, find a roommate, order repairs, or get a consultation. We have been operating on the market for over 2 years, making the process fast and convenient."
      },
      {
        id: "q2",
        question: "Do you only work with real estate?",
        answer:
          "No, we also offer additional services: roommate search, consultations via phone or Telegram, as well as repair and maintenance work."
      },
      {
        id: "q3",
        question: "Which regions do you operate in?",
        answer:
          "Currently, Livasa is available in major cities, but we are constantly expanding. If you have a special request, contact us via Telegram."
      }
    ]
  },
  {
    id: "listing",
    label: "Listing Properties",
    content: [
      {
        id: "q4",
        question: "How can I list my property on Livasa?",
        answer:
          "You need to register, go to the 'Add Listing' section, and fill out the form with photos, description, and price. Once approved, your property will appear in search results."
      },
      {
        id: "q5",
        question: "Can I post a listing without registering?",
        answer:
          "No. Registration is required — it helps protect users from fraud and ensures safety."
      }
    ]
  },
  {
    id: "listingTwo",
    label: "Finding Roommates",
    content: [
      {
        id: "q6",
        question: "How can I find a roommate for shared rent?",
        answer:
          "In the 'Find a Roommate' section, you can specify your preferences and budget, then contact suitable candidates via Telegram or phone."
      },
      {
        id: "q7",
        question: "Can I filter by interests?",
        answer:
          "Yes, we have filters for age, gender, hobbies, and even daily routine, so you can find the most compatible roommate."
      }
    ]
  },
  {
    id: "support",
    label: "Repairs & Services",
    content: [
      {
        id: "q8",
        question: "What repair services do you provide?",
        answer:
          "We work with professionals who can handle both small and large repairs: plumbing, electrical work, painting, furniture assembly, and more."
      },
      {
        id: "q9",
        question: "How can I order a repair?",
        answer:
          "Select the desired service in the 'Repairs & Services' section, describe the task, and leave your contact details. A specialist will get in touch to confirm the details."
      }
    ]
  },
  {
    id: "contact",
    label: "Contact Us",
    content: [
      {
        id: "q10",
        question: "How quickly do you respond?",
        answer:
          "On average, we respond within 10–30 minutes during working hours. On Telegram and by phone, we are often available even in the evenings."
      },
      {
        id: "q11",
        question: "Can I contact you only via Telegram?",
        answer:
          "Yes, Telegram is our main way of quick communication. However, you can also call us directly."
      }
    ]
  }
];
