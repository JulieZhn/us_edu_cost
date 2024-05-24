var storyContent = ﻿{
    "inkVersion": 20,
    "root": [
        [
            {
                "#": "author: Julie Zhu"
            },
            {
                "#": "title: How much would you spend to get your kid educated in the U.S. as a Chinese international student?"
            },
            {
                "#": "theme: light"
            },
            {
                "#": "IMAGE: education.jpg"
            },
            "^My parents always spare no effort to give me the best education. When I was in the 9th grade, they sent to me a local international high school in Beijing to prepare for studying in a U.S. college. At UCSB, the tuition for international students are the triple amount of that for a local student, which was around $45,000 a year. After spending three years there, now I am pursuing my master's degress at Columbia University, one of the most expensive universities with a tuition of more than $120,000 for a year.",
            "\n",
            "^The high expense studying and living in the U.S. actually gave me a lot of pressure and made me want to work in the U.S. to earn my tuition back, which seems impossible(is it?) as a reporter here. I am not sure if I can make it to hang in there until getting a greencard (not hoding out much hope), but I am very sure that navigating the immigration pass as an international student here in the U.S., the biggest immiration country in the world, is becoming increasingly time-consuming, labor-intensive, and expensive.",
            "\n",
            "^Coming to another country is never easy. Due to various reasons, many parents, like mine, are sending their kids to the U.S. for education and later for their career, which finally lead to a wish for immigration. Work was the most common reason for immigration, accounts for 41% of new immigrant arrivals in 2022, followed by schools, the second common immigration reason, which brought 701,945 people came to the U.S. as students that year. In 2023, the average cost of attendance for an internatiional student living on campus at a public 4-year institution is $108,364 over 4 years, and in a private college, it is $223,360 for 4 years.",
            "\n",
            "^If you are a Chinese parent thinking about helping your kid to navigate this immigration process in the U.S, this following game can help you figure out if you can make it (not professional advice though!! Just giving you a general idea & for fun:)",
            "\n",
            "^How much budget you do have? (hint: the reasonable range would be from $400,000 to $1,000,000)",
            "\n",
            "ev",
            "str",
            "^Let's go to explore!",
            "/str",
            "/ev",
            {
                "*": "0.c-0",
                "flg": 4
            },
            {
                "c-0": [
                    "^ ",
                    {
                        "->": "Chinese"
                    },
                    "\n",
                    {
                        "->": "0.g-0"
                    },
                    {
                        "#f": 5
                    }
                ],
            }
        ],
        {
            "Chinese": [
                [
                    "^To better prepare your kid for college in the U.S., you wants to get him/her some sort of international education before he/she goes to the country. What would you choose?",
                    "\n",
                    {
                        "#": "IMAGE: high_school.jpg"
                    },
                    "ev",
                    "str",
                    "^a local international high school in Beijing",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    "ev",
                    "str",
                    "^sending your kid to the U.S. for high school education in California ",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-1",
                        "flg": 4
                    },
                    "ev",
                    "str",
                    "^a normal high school in Beijing but getting your kid a international mentor ",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-2",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "Local"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ],
                        "c-1": [
                            "^ ",
                            {
                                "->": "US"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ],
                        "c-2": [
                            "^ ",
                            {
                                "->": "Mentor"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "Local": [
                [
                    "^The fees of attending a local international high school in Beijing is around $30,000 per year, so the three year cost would be $90,000. The living expense is around $150 per month, so the three-year-cost will be approximately $5,400.",
                    "\n",
                    "^To prepare your kids for the English language test, TOEFL, you get him/her four tutors, one for each subject in Reading, Listening, Speaking and Writing, which is what nearly every Chinese student studying abroad would do. Luckily, your child's English has always been good and he/she already got some practice in classes at the school, so you only need to get him/her 40 hours 1v1 tutor class in total. The price of 1 hour tutor is around $140, so 40 hours in total is $5,600. The TOEFL registration fee is $294 per time, and usually Chinese students would take around 5 times to get an ideal score that is above 100 (83% of the total score 120). So the test fee is $1470. Adding up the travel fee, it would at least cost $2,000 to take the tests.",
                    "\n",
                    "^\"I am basically working for my kid's tutors,\" you think. \"And that's not even enough! I also need to dip into my savings to spend on my kids tutoring.\"",
                    "\n",
                    "^Then your kid's college advisor told you that SAT is an another must for your kid to apply undergraduate programs in the U.S. Since SAT is much harder than TOEFL, your kid needs more mentor hours to understand various topics in the SAT Reading tests, complicated grammar variations to prepare for the Grammar test, and also practicing writing skills. You don't need to worry about math test as it is the middle-school-level math in China. Thus, you have to spend another $7,000 for 50 hours of SAT mentoring, also at the price of $140 per hour. To take the SAT test, which is not provided in mainland China, you have to at least accompany your kids to Hong Kong for the test, and usually Chinese students would take at least three times to get an ideal score that is above 1400 (87.5% of the total score 1600). In total, you will spend $8,600 for travel and $180 for test registration for having the SAT test for three times.",
                    "\n",
                    "^In total, you already spent around $119,000 for your kid's high school. You cried, you signed, and you regreted. But remember, another $17,000 would go to college application agencies from your pocket, as your kid needs some one to select fit programs and help figure out application essays. So you have spent $136,000 now. How much budget do you have left?",
                    "\n",
                    "ev",
                    "str",
                    "^Continue",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "College"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "US": [
                [
                    "^Okay, you are so generous and pay much attention to your kid's education, so you directly send him/her to California for high school education. Great! The beach, the subshine, the sea...your kid enjoys his/her life there a lot! But now it is your time to consider about budget.",
                    "\n",
                    "^The cost of public school varies from state to state, but the average is about $8000 per year. Because of the high price in California, your kid needs $1,000 for living each month. That's $68,000 in total four years.",
                    "\n",
                    "^To prepare for college application, since your kid is not an English speaker, you need to get him/her a TOEFL mentor, but only 20 hours is enough (as students who chose local high schools in Beijing need longer 1v1 mentoring hours), which totally costs you $2800 ($140 per hour). To prepare your kids for SAT, you have to spend another $4200 for 30 hours mentoring. You also have to spend the regisration fee for testing, don't you? So taking 3 times TOEFL and 3 times SAT spent you",
                    "\n",
                    "^\"Oh gosh,\" you think, \"it is like a fraud!\"",
                    "\n",
                    "^Oh, another think you suddenly remembered is that you need to pay for flights at least four times a year to get your kid be back to China during vacations then go back to the U.S. for school. That's another $4,300 a year, $17,200 for four years.",
                    "\n",
                    "^You think you have counted all your expenses now. But wait! Who will help your kid to select programs and write application essays? So another $17,000 goes to college application agencies from your pocket.",
                    "\n",
                    "^In sum, you spent $92,200 for your kids' four years high school in California. Great parent! And now your child is ready for college, which you will find all the money you have spent so far is just trifle.",
                    "\n",
                    "ev",
                    "str",
                    "^Continue",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "College"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "Mentor": [
                [
                    "^Okay you have selected a local high school, which spends much less than the two other on school tuition, for only $600 for three years. The living expense is around $150 per month, so the three-year-cost will be approximately $5,400.",
                    "\n",
                    "^However, to prepare your kids for the English language test, TOEFL, you get him/her four tutors, one for each subject in Reading, Listening, Speaking and Writing, which is what nearly every Chinese student studying abroad would do. To create an English environment for your kid, you decided to get him/her 50 hours 1v1 tutor class in total. The price of 1 hour tutor is around $140, so 50 hours in total is $7,000. The TOEFL registration fee is $294 per time, and usually Chinese students would take around 5 times to get an ideal score that is above 100 (83% of the total score 120). So the test fee is $1470. Adding up the travel fee, it would at least cost $2,000 to take the tests.",
                    "\n",
                    "^\"I am basically working for my kid's tutors,\" you think. \"And that's not even enough! I also need to dip into my savings to spend on my kids tutoring.\"",
                    "\n",
                    "^Then your kid's college advisor told you that SAT is an another must for your kid to apply undergraduate programs in the U.S. Since SAT is much harder than TOEFL, your kid needs more mentor hours to understand various topics in the SAT Reading tests, complicated grammar variations to prepare for the Grammar test, and also practicing writing skills. You don't need to worry about math test as it is the middle-school-level math in China. Thus, you have to spend another $9,800 for 70 hours of SAT mentoring, also at the price of $140 per hour. To take the SAT test, which is not provided in mainland China, you have to at least accompany your kids to Hong Kong for the test, and usually Chinese students would take at least three times to get an ideal score that is above 1400 (87.5% of the total score 1600). In total, you will spend $8,600 for travel and $180 for test registration for having the SAT test for three times.",
                    "\n",
                    "^You also want to get your kids an English mentor to meet with your kid reguarly to talk about U.S. cultures and colleges. That costs you $50 an hour, and your kid gets his/her mentor for four years with a meeting once a week. That's another $10,400.",
                    "\n",
                    "^In total, you already spent around $43,800 for your kid's high school. You cried, you signed, and you regreted. But remember, another $17,000 would go to college application agencies from your pocket, as your kid needs some one to select fit programs and help figure out application essays. So you have spent $60,800 now. How much budget do you have left?",
                    "\n",
                    "ev",
                    "str",
                    "^Continue",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "College"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "College": [
                [
                    {
                        "#": "IMAGE: college.jpg"
                    },
                    "^Finally! Your kid make it to college. What kind of college you want your kid to choose?",
                    "\n",
                    "ev",
                    "str",
                    "^Public Univeristy",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    "ev",
                    "str",
                    "^Private University",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-1",
                        "flg": 4
                    },
                    "ev",
                    "str",
                    "^Community College",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-2",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "Public"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ],
                        "c-1": [
                            "^ ",
                            {
                                "->": "Private"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ],
                        "c-2": [
                            "^ ",
                            {
                                "->": "CC"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "Public": [
                [
                    "^GREAT CHOICE! Public universities are relatively cost-effective with lower tuition but also great education quality. However, the average tuition now increased to $26,290 to international students a year at a typical four-year public college.",
                    "\n",
                    "^So for four years, you spend $105,160 for tuition and $48,000 for living expense (calculated as $1000 per month).That's in total $153,160.",
                    "\n",
                    "^Fortunately, your children are understanding and will work on campus to earn some money as compensation. Let's go to see how much your kid can make at different places on campus.",
                    "\n",
                    "ev",
                    "str",
                    "^Go!",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "Work"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "Private": [
                [
                    "^Cool! Your kid will get the best education in the U.S. at a private school. However, the fee is also a little higher than a typical four-year public college or a community college. The cost of attending a private university as an international student is around $55,000, and for four years, that will be 220,000. Plus the living expense, calcualted as $1,000 per month, the total expense will be around $268,000.",
                    "\n",
                    "^Fortunately, your children are understanding and will work on campus to earn some money as compensation. Let's go to see how much your kid can make at different places on campus.",
                    "\n",
                    "ev",
                    "str",
                    "^Go!",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "Work"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "CC": [
                [
                    "^Community college is the best choice for students who have financial concerns on the crazily expensive colleges. What they always do is attending two years CC, and then transfering to a public college where they will get their degrees from, which can be the most cost-effective choice that you can ever have.",
                    "\n",
                    "^The average cost of attending a CC as an international is around $8,600 a year ($17,200 for two years), and after that, your kid can go to a public college that costs $26,290 a year ($52,580 for two years). In total, you will spend $117,780.",
                    "\n",
                    "^Fortunately, your children are understanding and will work on campus to earn some money as compensation. Let's go to see how much your kid can make at different places on campus.",
                    "\n",
                    "ev",
                    "str",
                    "^Go!",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "Work"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "Work": [
                [
                    "^What kind of job your kid chose?",
                    "\n",
                    "ev",
                    "str",
                    "^Dining Hall",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    "ev",
                    "str",
                    "^Gym",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-1",
                        "flg": 4
                    },
                    "ev",
                    "str",
                    "^Library",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-2",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "DiningHall"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ],
                        "c-1": [
                            "^ ",
                            {
                                "->": "Gym"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ],
                        "c-2": [
                            "^ ",
                            {
                                "->": "Library"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "DiningHall": [
                [
                    "^At dining hall, your kid made $17 per hour by washing dishes. Each week, he/she can make at least $340 for working 20 hours there. Great! That's $48,960 for four years. You can now add that to your remaining budget.",
                    "\n",
                    "ev",
                    "str",
                    "^Continue",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "End"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "Gym": [
                [
                    "^At gym, your kid made $17 per hour by working at the front desk. Each week, he/she can make at least $340 for working 20 hours there. Great! That's $48,960 for four years. You can now add that to your remaining budget.",
                    "\n",
                    "ev",
                    "str",
                    "^Continue",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "End"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "Library": [
                [
                    "^Great choice! In library, you can work while studying on your coursework. At library, your kid made $19 per hour by working at the front desk. Each month, he/she can make at least $2,000. Great! That's $72,000 for four years. You can now add that to your remaining budget.",
                    "\n",
                    "ev",
                    "str",
                    "^Continue",
                    "/str",
                    "/ev",
                    {
                        "*": ".^.c-0",
                        "flg": 4
                    },
                    {
                        "c-0": [
                            "^ ",
                            {
                                "->": "End"
                            },
                            "\n",
                            {
                                "#f": 5
                            }
                        ]
                    }
                ],
                {
                    "#f": 1
                }
            ],
            "End": [
                {
                    "#": "IMAGE: graduation.jpg"
                },
                "^Great! Your kid has done his/her college education while making some money. How much money do you have left? Do you want your kid to work or continue to study for post-graduate education? It is your call! But hopefully, this game has given you some general idea that how much money Chinese parents usually spend to send thier children to the U.S. for education!",
                "\n",
                "done",
                {
                    "#f": 1
                }
            ],
            "#f": 1
        }
    ],
    "listDefs": {}
};
