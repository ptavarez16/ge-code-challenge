const pages = [
  {
    "address":"http://foo.bar.com/p1",
    "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p3", "http://foo.bar.com/p4"]
  },
  {
    "address":"http://foo.bar.com/p2",
    "links": ["http://foo.bar.com/p2", "http://foo.bar.com/p4"]
  },
  {
    "address":"http://foo.bar.com/p4",
    "links": ["http://foo.bar.com/p5", "http://foo.bar.com/p1", "http://foo.bar.com/p6"]
  },
  {
    "address":"http://foo.bar.com/p5",
    "links": []
  },
  {
    "address":"http://foo.bar.com/p6",
    "links": ["http://foo.bar.com/p7", "http://foo.bar.com/p4", "http://foo.bar.com/p5"]
  }
]

const succeed = [
  "http://foo.bar.com/p1",
  "http://foo.bar.com/p2",
  "http://foo.bar.com/p4",
  "http://foo.bar.com/p5",
  "http://foo.bar.com/p6"
]

const skip = [
  "http://foo.bar.com/p2",
  "http://foo.bar.com/p1",
  "http://foo.bar.com/p4",
  "http://foo.bar.com/p5"
]

const fail = [
  "http://foo.bar.com/p7",
  "http://foo.bar.com/p3",
]

module.exports = {
  pages,
  succeed,
  skip,
  fail
}
