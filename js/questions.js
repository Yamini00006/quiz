let questions = [
    {
        numb: 1,
        question: "A stranger calls and asks you to confirm your work email address. What should you do?",
        answer: "Ask for their contact details and verify with IT",
        options: [
            "Provide the information if they sound official",
            "Ask for their contact details and verify with IT",
            "Refuse to speak and hang up immediately",
            "Tell them you don’t know"
        ]
    },
    {
        numb: 2,
        question: "You receive an email from “IT Support” asking for your password. How do you respond?",
        answer: "Verify the email with IT before responding",
        options: [
            "Reply with your password",
            "Ignore the email",
            "Verify the email with IT before responding",
            "Forward it to colleagues for their opinion"
        ]
    },
    {
        numb: 3,
        question: "A coworker asks to borrow your ID badge for a minute. What’s the safest approach?",
        answer: "Offer to accompany them instead",
        options: [
            "Let them use it if they’re trustworthy",
            "Offer to accompany them instead",
            "Refuse and report them to HR",
            "Ignore the request"
        ]
    },
    {
        numb: 4,
        question: "What is a common tactic used in social engineering?",
        answer: "Building trust and requesting sensitive information",
        options: [
            "Offering cash incentives",
            "Building trust and requesting sensitive information",
            "Asking for feedback on security policies",
            "Sending encrypted files"
        ]
    },
    {
        numb: 5,
        question: "If someone claims to be from management and asks for employee details, what should you do?",
        answer: "Politely ask for verification or refer them to HR",
        options: [
            "Provide details if they seem credible",
            "Politely ask for verification or refer them to HR",
            "Ignore the request",
            "Forward the information without question"
        ]
    },
    {
        numb: 6,
        question: "Which of the following could be a sign of a social engineering attack?",
        answer: "A request to click a link urgently or face consequences",
        options: [
            "An email with general information",
            "A request to click a link urgently or face consequences",
            "A greeting from a known contact",
            "A routine company newsletter"
        ]
    },
    {
        numb: 7,
        question: "You get a call asking to confirm your login credentials. How should you respond?",
        answer: "Refuse and report it to IT immediately",
        options: [
            "Confirm your credentials immediately",
            "Hang up and block the caller",
            "Refuse and report it to IT immediately",
            "Ask for their email to send the information later"
        ]
    },
    {
        numb: 8,
        question: "Why should you be cautious when sharing information on social media?",
        answer: "It can be used by attackers to learn about you",
        options: [
            "It might be seen by friends",
            "It can be used by attackers to learn about you",
            "It’s a waste of time",
            "It’s only dangerous if it includes passwords"
        ]
    },
    {
        numb: 9,
        question: "A coworker asks for your computer password to check a file. What should you do?",
        answer: "Log in and supervise them",
        options: [
            "Give them your password",
            "Log in and supervise them",
            "Allow them to use their own credentials",
            "Ignore the request"
        ]
    },
    {
        numb: 10,
        question: "Which approach is best to protect yourself from social engineering?",
        answer: "Verify identities and be cautious with sensitive details",
        options: [
            "Always be friendly and helpful",
            "Refuse to provide information to anyone",
            "Verify identities and be cautious with sensitive details",
            "Avoid using email or phone for communication"
        ]
    },
    {
        numb: 11,
        question: "Which of the following is considered a strong password?",
        answer: "MySecurePass2!",
        options: [
            "Password123",
            "qwerty12345",
            "MySecurePass2!",
            "12345678"
        ]
    },
    {
        numb: 12,
        question: "What’s the most secure way to store your passwords?",
        answer: "Use a password manager",
        options: [
            "Write them down",
            "Use a password manager",
            "Save them in a document on your desktop",
            "Rely on memory only"
        ]
    },
    {
        numb: 13,
        question: "How often should you change your passwords?",
        answer: "Every few months or if you suspect a breach",
        options: [
            "Every few months or if you suspect a breach",
            "Only when you forget them",
            "Once a year",
            "Never, for convenience"
        ]
    },
    {
        numb: 14,
        question: "You need a quick password for a new account. What’s a secure method?",
        answer: "Use a password generator",
        options: [
            "Use a common phrase",
            "Use a password generator",
            "Use a simple pattern",
            "Use your phone number"
        ]
    },
    {
        numb: 15,
        question: "Which practice strengthens password security?",
        answer: "Enabling multi-factor authentication",
        options: [
            "Reusing passwords across accounts",
            "Avoiding two-factor authentication",
            "Enabling multi-factor authentication",
            "Using short, simple passwords"
        ]
    },
    {
        numb: 16,
        question: "You receive an email saying your account password has expired. What should you do?",
        answer: "Log in to your account through the official website",
        options: [
            "Click the link immediately",
            "Ignore it",
            "Log in to your account through the official website",
            "Delete the email"
        ]
    },
    {
        numb: 17,
        question: "Which of the following is true about password length and security?",
        answer: "Longer passwords are more secure than shorter ones",
        options: [
            "Short passwords are secure enough if complex",
            "Longer passwords are more secure than shorter ones",
            "Password length does not impact security",
            "Simple passwords are better than complex ones"
        ]
    },
    {
        numb: 18,
        question: "Why shouldn’t you share your passwords with others?",
        answer: "They could compromise account security",
        options: [
            "They may forget it",
            "They could compromise account security",
            "It’s an inconvenience to change it later",
            "It’s against company policy only"
        ]
    },
    {
        numb: 19,
        question: "What’s the risk of using personal information in your password?",
        answer: "Attackers can easily guess it based on public information",
        options: [
            "No risk as it’s easy to remember",
            "Attackers can easily guess it based on public information",
            "It makes the password unique",
            "It’s helpful for security questions"
        ]
    },
    {
        numb: 20,
        question: "How does multi-factor authentication enhance security?",
        answer: "It adds an extra layer of verification",
        options: [
            "It slows down access time",
            "It adds an extra layer of verification",
            "It makes the login process difficult",
            "It’s only necessary for highly sensitive data"
        ]
    },
    {
        numb: 21,
        question: "Which of these is an example of sensitive data?",
        answer: "Social Security numbers",
        options: [
            "A public address",
            "Company revenue statistics",
            "Social Security numbers",
            "Employee job titles"
        ]
    },
    {
        numb: 22,
        question: "What is the best way to dispose of sensitive documents?",
        answer: "Shred or securely dispose of them",
        options: [
            "Place them in a recycling bin",
            "Shred or securely dispose of them",
            "Leave them in an office drawer",
            "Hand them to a coworker"
        ]
    },
    {
        numb: 23,
        question: "A colleague needs data from a secure system. How should you share it?",
        answer: "Use approved secure file-sharing methods",
        options: [
            "Send it via a personal email account",
            "Use approved secure file-sharing methods",
            "Share through social media",
            "Print it and leave it on their desk"
        ]
    },
    {
        numb: 24,
        question: "Which of these practices is essential for data privacy?",
        answer: "Encrypting sensitive information",
        options: [
            "Reusing passwords",
            "Encrypting sensitive information",
            "Ignoring security warnings",
            "Only using social media"
        ]
    },
    {
        numb: 25,
        question: "Which of the following protects data on a lost or stolen device?",
        answer: "Using encryption",
        options: [
            "Disabling device locking",
            "Using encryption",
            "Sharing passwords for recovery",
            "Using a common unlock pattern"
        ]
    },
    {
        numb: 26,
        question: "A customer requests their data be deleted from your company’s records. How should you respond?",
        answer: "Notify IT or the compliance team to process the request",
        options: [
            "Tell them it’s impossible",
            "Notify IT or the compliance team to process the request",
            "Ignore the request",
            "Request a manager’s approval"
        ]
    },
    {
        numb: 27,
        question: "How do you confirm an email from a manager is legitimate?",
        answer: "Verify by contacting them directly through a known method",
        options: [
            "Respond to the email immediately",
            "Click any link inside to verify",
            "Verify by contacting them directly through a known method",
            "Forward it to other employees"
        ]
    },
    {
        numb: 28,
        question: "When should you review and update your security knowledge?",
        answer: "Regularly, or whenever there are updates",
        options: [
            "Only when there’s a breach",
            "When convenient",
            "Regularly, or whenever there are updates",
            "Never, unless required"
        ]
    },
    {
        numb: 29,
        question: "How can you check if your device is secure?",
        answer: "Regularly update software and scan for threats",
        options: [
            "Do nothing if it seems fine",
            "Only update if there are issues",
            "Regularly update software and scan for threats",
            "Use it without restrictions"
        ]
    },
    {
        numb: 30,
        question: "Why is it risky to use public Wi-Fi for sensitive work?",
        answer: "Data can be intercepted on public networks",
        options: [
            "There’s no risk",
            "Data can be intercepted on public networks",
            "It’s only risky for financial data",
            "It’s only risky if the Wi-Fi is slow"
        ]
    },
  ];
  