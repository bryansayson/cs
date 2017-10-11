import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-tag-list',
	templateUrl: './tag-list.component.html',
	styleUrls: ['./tag-list.component.css']
})

export class TagListComponent {
	title: string;
	tags: Array<any>;
	features: Array<any>;
	selectedFeature: 'all';

	constructor(private dataService: DataService) {
	}

	ngOnInit() {
		this.title = "Tags";
		this.tags = [];
		this.features = [];
		this.dataService.getTags().subscribe((tags) => {
			this.tags = tags;
			// generate features
			this.tags.forEach(tag => {
				tag.features.forEach(feature => {
					if (this.features.indexOf(feature) === -1) {
						this.features.push(feature);
					};
				});
			});
			this.features.unshift("all");
		});
	}

	toggleFeature(f) {
		this.selectedFeature = f;
	}
}
