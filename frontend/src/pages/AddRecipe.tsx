import React, { useState } from 'react';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const AddRecipe: React.FC = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [steps, setSteps] = useState<string[]>([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [newStep, setNewStep] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/recipes', { title, ingredients, steps });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addIngredient = () => {
        setIngredients([...ingredients, newIngredient]);
        setNewIngredient('');
    };

    const addStep = () => {
        setSteps([...steps, newStep]);
        setNewStep('');
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Add Recipe</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Title"
                    fullWidth
                    margin="normal"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    label="New Ingredient"
                    fullWidth
                    margin="normal"
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                />
                <Button onClick={addIngredient}>Add Ingredient</Button>
                <List>
                    {ingredients.map((ingredient, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={ingredient} />
                        </ListItem>
                    ))}
                </List>
                <TextField
                    label="New Step"
                    fullWidth
                    margin="normal"
                    value={newStep}
                    onChange={(e) => setNewStep(e.target.value)}
                />
                <Button onClick={addStep}>Add Step</Button>
                <List>
                    {steps.map((step, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={step} />
                        </ListItem>
                    ))}
                </List>
                <Button type="submit" variant="contained" color="primary">
                    Add Recipe
                </Button>
            </form>
        </Container>
    );
};

export default AddRecipe;
