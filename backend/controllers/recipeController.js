const Recipe = require('../models/Recipe');

const addRecipe = async (req, res) => {
    const { title, ingredients, steps } = req.body;
    try {
        const recipe = await Recipe.create({ title, ingredients, steps });
        res.status(201).json({ message: 'Recipe added successfully', recipe });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addRecipe, getRecipes };
