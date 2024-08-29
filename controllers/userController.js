const User = require('../model/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.send(err.message);
    }
};
const checkUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        
        if (password === user.password) {
            res.json({
                success: true,
                email:user.email
            })
        }

       
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
}
const getOneUserByEmail = async(req,res)=>{
    const { email } = req.body;

    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}



const updateUserByEmail = async (req, res) => {
    const { email, name, phone, location, aboutUs, city, businessTime, holiday, image_profile } = req.body;
  
    try {
      const updatedUser = await User.findOneAndUpdate(
        { email },
        { name, phone, location, aboutUs, city, businessTime, holiday,image_profile },
        { new: true, runValidators: true } // Return the updated document
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  


module.exports = {
    getAllUsers,
    createUser,
    checkUser,
    getOneUserByEmail,
    updateUserByEmail
};











// async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         // Generate JWT token
//         const token = jwt.sign({ id: user._id }, 'yourJWTSecret', { expiresIn: '1h' });

//         res.json({ token, message: 'Login successful' });
//     } catch (error) {
//         console.error('Error during login:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// }