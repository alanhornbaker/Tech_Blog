// A blog post belongs to only one user.
// A user can have many blog posts.
// A blog post can have many comments.
// A comment belongs to only one blog post.

const User = require("./User");
const Blogpost = require("./Blogpost");
const Comment = require("./Comment");

// Gallery.hasMany(Painting, {
//   foreignKey: "gallery_id",
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: "gallery_id",
// });

module.exports = { User, Blogpost, Comment };
