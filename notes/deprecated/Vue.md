`Array.splice(start: number, deleteCount?: number, ...items: T[]): T[]`

* 在数组的指定索引的位置往后插入指定数量的元素。
* 如果只传入参数`start`，则为切割数组到指定长度。
* 如果只传入参数`start`和`deleteCount`，则为删除指定索引范围内的元素。
* 如果只传入参数`start`和`items`，则为插入元素到指定索引位置。
* 如果传入全部参数，则为替换指定索引范围内的元素。
* 参数`deleteCount`默认为0。
* 返回被删除/替换的元素数组。
