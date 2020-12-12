import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mFilter'
})
export class MFilterPipe implements PipeTransform {

  transform(items: any[], keyword: any, properties: string[]): any[] {
    if (!items) { return []; }
    if (!keyword) { return items; }
    return items.filter(item => {
      let itemFound: boolean;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < properties.length; i++) {
        if (item[properties[i]].toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
          itemFound = true;
          break;
        }
      }
      return itemFound;
    });

  }
}
