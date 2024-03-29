const { User, Task } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = User.findOne({ _id: context.user._id })
                    .select('-__v -password');

                return userData
            }
            throw new AuthenticationError('Not logged in!')
        },

        users: async () => {
            return await User.find({})
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user);
            return { token, user };
        },
        saveTask: async (parent, { taskId, date, startTime, endTime, title }, context) => {
            if (context.user) {

                const updatedUser = await User
                    .findOneAndUpdate(
                        { _id: context.user._id },
                        { $addToSet: { savedTasks: { taskId, date, startTime, endTime, title } } },
                        { new: true }
                    );

                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        removeTask: async (parent, { taskId }, context) => {
            if (context.user) {
                const updatedUser = await User
                    .findOneAndUpdate(
                        { _id: context.user._id },
                        { $pull: { savedTasks: { taskId } } }
                    )
                return updatedUser
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
        },
        updateTask: async (parent, {id}, context) => {
            if (context.user) {
              const updatedUser = await User
              .findOneAndUpdate(
                {_id: context.user._id},
                { $pull: {routine: {id}}},
                { new: true }
              )
              return updatedUser
            }
            throw new AuthenticationError('Not logged in');
          }
    }
}

module.exports = resolvers