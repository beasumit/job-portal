export default class User {
  gethome(req, res) {
    res.render("layout",{ body: 'Content to be included in layout' });
  }
}
