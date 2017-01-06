# angular-rellax
Angular 2 bindings for Rellax by Dixon and Moe.

### Usage
Import `RellaxDirective` into your module.

```
import { RellaxDirective } from 'ng-rellax'

@NgModule({
    declarations: [RellaxDirective]
})
```

Just add the `rellax` directive to your element, and use the `[speed]` and `[center]` inputs (optional).

### Example
```
<div rellax [speed]="4"></div>
```

`[speed]` and `[center]` are both optional.

### Contributing
I didn't get a chance to test this very much, so if you find something, please file an issue or PR at [https://www.github.com/wbhob/ng-rellax].
