'use strict'
const store = require('./store')

// Auth Ui below
const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}
const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
}
const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  store.user = data.user
}
const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
}
const changePasswordFailure = function () {
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
}
const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
}

// Teams ui below
const createTeamsSuccess = (data) => {
  console.log(data)
  $('#message').text('Successfully created team')
  $('#message').css('background-color', 'green')
}
const createTeamsFailure = () => {
  $('#message').text('Failure to create team')
  $('#message').css('background-color', 'red')
}

const updateTeamsSuccess = (data) => {
  console.log(data)
  $('#message').text('Successfully updated team')
  $('#message').css('background-color', 'green')
}
const updateTeamsFailure = () => {
  $('#message').text('Failure to update team')
  $('#message').css('background-color', 'red')
}
const getTeamsSuccess = (data) => {
  console.log(data)
  $('#message').text('Successfully got teams')
  $('#message').css('background-color', 'green')
}
const getTeamsFailure = () => {
  $('#message').text('Failure to get teams')
  $('#message').css('background-color', 'red')
}
const destroyTeamSuccess = (data) => {
  $('#message').text('Successfully deleted team')
  $('#message').css('background-color', 'green')
}
const destroyTeamFailure = () => {
  $('#message').text('Failure to delete team')
  $('#message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createTeamsSuccess,
  createTeamsFailure,
  updateTeamsSuccess,
  updateTeamsFailure,
  getTeamsSuccess,
  getTeamsFailure,
  destroyTeamSuccess,
  destroyTeamFailure
}
