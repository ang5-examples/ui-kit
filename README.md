# UiKit

2 usefull directives

1) universal tabs
```
<tabs>
  <tab>
    <tab-title>
      Title 1
    </tab-title>
    <tab-content>
      <i>Content</i> 1
    </tab-content>
  </tab>
  <tab>
    <tab-title>
      <i>Title</i> 2
    </tab-title>
    <tab-content>
      Content 2
    </tab-content>
  </tab>
</tabs>
```
2) view port checker
```
<test-component *ifViewportSize="'small'" [value]="1"></test-component>
<test-component *ifViewportSize="'medium'" [value]="2"></test-component>
<test-component *ifViewportSize="'large'" [value]="3"></test-component>
```
