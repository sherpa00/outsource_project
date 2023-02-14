const privacyPolicyData = [
    {
        name: "Privacy Policy",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor sollicitudin finibus. Suspendisse ullamcorper ultrices ligula ut auctor. Vestibulum justo turpis, accumsan sit amet tempor vitae, scelerisque et nunc. Nam consectetur non enim quis pellentesque. Pellentesque venenatis, massa ut auctor vestibulum, massa velit hendrerit est, vitae sagittis lacus ante nec diam.",
        id: 1
    },
    {
        name: "Introduction",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor sollicitudin finibus. Suspendisse ullamcorper ultrices ligula ut auctor. Vestibulum justo turpis, accumsan sit amet tempor vitae, scelerisque et nunc. Nam consectetur non enim quis pellentesque. Pellentesque venenatis, massa ut auctor vestibulum, massa velit hendrerit est, vitae sagittis lacus ante nec diam.",
        id: 2
    },
    {
        name: "Cookies and IP address",
        data: "Lorem ipsum dolor sit amng elit. Ut tempor sollicitudin finibus. Suspendisse ullamcorper ultrices ligula ut auctor. Vestibulum justo turpis, accumsan sit amet tempor vitae, scelerisque et nunc. Nam consectetur non enim quis pellentesque. Pellentesque venenatis, massa ut auctor vestibulum, massa velit hendrerit est, vitae sagittis lacus ante nec diam.",
        id: 3
    },
    {
        name: "Information Disclosure",
        data: "Lorem ipsum dolor sit amet, consectetur ascing elit. Ut tempor sollicitudin finibus. Suspendisse ullamcorper ultrices ligula ut auctor. Vestibulum justo turpis, accumsan sit amet tempor vitae, scelerisque et nunc. Nam consectetur non enim quis pellentesque. Pellentesque venenatis, massa ut auctor vestibulum, massa velit hendrerit est, vitae sagittis lacus ante nec diam.",
        id: 4
    },
    {
        name: "Validations",
        data: "Lorem ipsum dolor sit ansectetur adipiscing elit. Ut tempor sollicitudin finibus. Suspendisse ullamcorper ultrices ligula ut auctor. Vestibulum justo turpis, accumsan sit amet tempor vitae, scelerisque et nunc. Nam consectetur non enim quis pellentesque. Pellentesque venenatis, massa ut auctor vestibulum, massa velit hendrerit est, vitae sagittis lacus ante nec diam.",
        id: 5
    },
    {
        name: "Links and Website Redirections",
        data: "Lorem ipsum doectetur adipiscing elit. Ut tempor sollicitudin finibus. Suspendisse ullamcorper ultrices ligula ut auctor. Vestibulum justo turpis, accumsan sit amet tempor vitae, scelerisque et nunc. Nam consectetur non enim quis pellentesque. Pellentesque venenatis, massa ut auctor vestibulum, massa velit hendrerit est, vitae sagittis lacus ante nec diam.",
        id: 6
    },
    {
        name: "Locations",
        data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor sollicitudin finibus. Suspendisse ullamcorper ultrices ligula ut auctor. Vestibulum justo turpis, accumsan sit amet tempor vitae, scelerisque et nunc. Nam consectetur non enim quis pellentesque. Pellentesque venenatis, massa ut auctor vestibulum, massa velit hendrerit est, vitae sagittis lacus ante nec diam.",
        id: 7
    },
]

function PrivacyPolicy() {
    return (
        <div id="privacy-policy-container">
            <h2>
                <span>Our</span> Privacy Policy
            </h2>
            <div id="privacy-policy-list">
                {
                    privacyPolicyData.map((policy,index) => {
                        return <SinglePrivacyPolicy
                                    key={policy.id}
                                    name={policy.name}
                                    data={policy.data}
                                />
                    })
                }
            </div>
        </div>
    )
}

function SinglePrivacyPolicy({name,data}) {
    return (
        <div className="single-policy">
            <h3>
                {name}
            </h3>
            <p>
                {data}
            </p>
        </div>
    )
}

export default PrivacyPolicy;