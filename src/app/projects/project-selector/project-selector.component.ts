import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-project-selector',
    templateUrl: './project-selector.component.html',
    styleUrls: ['../projects.component.css', './project-selector.component.css']
})
export class ProjectSelectorComponent implements OnInit {
    projects = [
        [
            {
                title: "We Go Services",
                thumbnail: "/wego.jpg", // https://ces.eetimes.com/wp-content/uploads/2020/01/image-eet-ces.jpg
                tags: ["python", "html5", "javascript", "ngnix", "docker", "python", "swei", "agile-development", "multi-cloud-solution",],
                desc: "In the advent of autonomous vehicles, we aim to take advantage of the growing market of Transportation as a Service with a scalable multi-service Web Application to help fulfil everyday needs.",
                link: "https://github.com/sp20-swei-Team22",
                router: "wego-services",
            },
        ],
        [
            {
                title: "Components-Algorithms Bridge Assignment",
                thumbnail: "/kart-test.jpg", // https://www.aoe.com/fileadmin/AOE.com/images/main_navigation/blog/Stock_Photos/miscellaneous/Fotolia_94900081_Chess_Pieces_930_590_70.jpg
                tags: ["java", "components", "algorithms", "data-structures",],
                desc: "An open bid for experimental projects that could be assigned in Component-Based Programming and then reduxed for Algorithm and Data Structures.",
                link: "https://github.com/komoto415/TestAssignment",
                router: "comp-to-algo",
            },
        ],
        [
            // {
            //     title: "To Brock and not to Brock",
            //     thumbnail: "/senior-project.png", // https://i.ibb.co/7yMB9t6/FireRed.png
            //     tags: ["ml", "pokemon", "python", "julia"],
            //     desc: "For my research project, my partner and I decided to teach a machine how to beat Brock in Pokemon Fire Red. If Twitch can do it, why can't a bot?",
            // },
        ],

    ]

    public getProjects() {
        return this.projects;
    }

    constructor(public router: Router) { }

    ngOnInit(): void {
    }

}