import { useState } from "react";

export const faqList = [
    {
        question: "What is the total cost of cleaning ?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac. Praesent quis ante aliquet, consequat enim non, bibendum tortor",
        active: true,
        id :1
    },
    {
        question: "How much time it takes to get job done ?",
        answer: "Lorem ipsur adipiscing rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac. Praesent quis ante aliquet, consequat enim non, bibendum tortor",
        active: false,
        id: 2
    },
    {
        question: "what time the service is available ?",
        answer: "Lorem ipsum ipiscing elidlkfjdkls fdsklfj jf dkjf alkdjlfkj lkjdaf",
        active: false,
        id: 3
    },
    {
        question: "How many service offices are stationed ?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac. Praesent quis ante aliquet, consequat enim non, bibendum tortor",
        active: false,
        id: 4
    },
    {
        question: "What are some best cleaning services right now ?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus luctus ante ut aliquam. Mauris consectetur sem diam, ut convallis turpis laoreet a. Suspendisse tempus tortor nibh, interdum fermentum tortor sodales ac. Praesent quis ante aliquet, consequat enim non, bibendum tortor",
        active: false,
        id: 5
    }
];

function Faq() {

    return (
        <div id="faq-container">
            <h2>Frequently Asked Questions</h2>
            <div id="faq-list">
                {
                    faqList.map((faq,index) => {
                        return <SingleFaq
                                    question={faq.question}
                                    answer={faq.answer}
                                    active={faq.active}
                                    key={faq.id}
                                />
                    })
                }
            </div>
        </div>
    )
}

function SingleFaq({question,answer,active}) {
    const [IsActive,setIsActive] = useState(active);

    if (active) {
        return <details open>
                <summary onClick={() => setIsActive(!IsActive)}>
                    <strong>
                        {question}
                    </strong>
                    {
                        IsActive ? <span>&#x2796;</span> :<span>&#x2795;</span>
                    }
                </summary>
                <p>
                    {answer}
                </p>
        </details>
    }

    return (
        <details>
                <summary onClick={() => setIsActive(!IsActive)}>
                    <strong>
                        {question}
                    </strong>
                    {
                        IsActive ? <span>&#x2796;</span> :<span>&#x2795;</span>
                    }
                </summary>
                <p>
                    {answer}
                </p>
        </details>
    )
}

export default Faq;