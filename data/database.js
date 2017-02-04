/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// Model types
class User {}
class Todo {}

// Mock data
var viewer = new User();
viewer.id = '1';
viewer.name = 'Anonymous';
var todos = ['What\'s-it', 'Who\'s-it', 'How\'s-it'].map((name, i) => {
  var todo = new Todo();
  todo.name = name;
  todo.id = `${i}`;
  todo.createdAt = Date.now();
  return todo;
});

module.exports = {
  // Export methods that your schema can use to interact with your database
  getUser: (id) => id === viewer.id ? viewer : null,
  getViewer: () => viewer,
  getTodo: (id) => todos.find(w => w.id === id),
  getTodos: () => todos,
  User,
  Todo,
};
