class ListNode {
  constructor (data) {
    this.data = data
    this.next = null
  }
}
class LinkList {
  constructor () {
    this.head = null
    this.trail = null
  }
  find (element) {
    let p = this.head
    while (p !== null && p.next !== element) {
      p = p.next
    }
    return p
  }
  insertAfterNode (element, node) {
    if (node === null) return
    let n = new ListNode(element)
    n.next = node.next
    node.next = n
    if (this.trail === node) {
      this.trail = node
    }
  }
  insterAfter (element, data) {
    this.insertAfterNode(element, this.find(data))
  }
  findPrevious (element) {
    let prev = null
    let curr = this.head
    while (curr !== null && curr !== element) {
      prev = curr
      curr = curr.next
    }
    return [prev, curr]
  }
  addFirst (element) {
    let h = new ListNode(element)
    h.next = this.head
    if (this.head === null) {
      this.trail = h
    }
    this.head = h
  }
}
