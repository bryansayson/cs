import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'featureFilter'
})
export class FeatureFilterPipe implements PipeTransform {

  transform(arr: any, feature: string): any {
  	if (!feature || feature === "all") {
  		return arr;
  	} else {
	  	return arr.filter(tag => {
	    	return tag.features.indexOf(feature) !== -1;
	    });	
  	}
  };

}