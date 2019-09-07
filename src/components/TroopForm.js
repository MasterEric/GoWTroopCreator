import React from 'react'
import { Typography, CardContent, Grid, Card, TextField, MenuItem, InputAdornment } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone'
import { makeStyles } from "@material-ui/core/styles";

import { colors, roles, traits, rarities } from "./Values";
import { Image } from "./Icon";

const useStyles = makeStyles(theme => {
  return {
    appbar: {
      elevation: 0,
      position: "fixed" 
    },
    toolbar: {
      paddingLeft: "8px",
      paddingRight: "8px"
    },
    appbarText: {
      alignSelf: "center",
      marginRight: "10px"
    },
    input: {
      marginLeft: "auto"
    },
    menu: {
      width: 200,
    },
    menuColor: {
      width: 400,
    },
    skill: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up(1200)]: {
        width: '33%',
        padding: '4px'
      }
    },
    manaCost: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up(1400)]: {
        width: '33%',
        padding: '4px'
      }
    },
    manaColors: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up(1400)]: {
        width: '66%',
        padding: '4px'
      }
    },
    typeField: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up(1400)]: {
        width: '50%',
        padding: '4px'
      }
    },
    trait: {
      [theme.breakpoints.up('xs')]: {
        width: '100%'
      },
      [theme.breakpoints.up('xl')]: {
        width: '33%',
        padding: '4px'
      }
    }
  };
 });

export const TroopForm = ({className, troop, setTroop}) => {
  const classes = useStyles();

  const handleChange = name => event => {
    setTroop({ ...troop, [name]: event.target.value });
  };

  return (
    <Grid xs={12} lg={8} spacing={3} container item direction="row" className={className}>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Name</Typography>
            <TextField
              id="form-name"
              value={troop.name}
              onChange={handleChange('name')}
              margin="normal"
              type="text"
              label="Name"
              style={{width: '100%'}}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Kingdom</Typography>
            <TextField
              id="form-kingdom"
              value={troop.kingdom}
              onChange={handleChange('kingdom')}
              margin="normal"
              type="text"
              label="Kingdom"
              style={{width: '100%'}}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Rarity</Typography>
            <TextField
              id="form-rarity"
              value={troop.rarity}
              select
              label="Rarity"
              onChange={handleChange('rarity')}
              margin="normal"
              style={{width: '100%'}}
              variant="outlined">
              {rarities.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Level</Typography>
            <TextField
              id="form-level"
              value={troop.level}
              type="number"
              onChange={handleChange('level')}
              margin="normal"
              label="Level"
              style={{width: '100%'}}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Role</Typography>
            <TextField
              id="form-role"
              value={troop.role}
              select
              label="Role"
              onChange={handleChange('role')}
              margin="normal"
              style={{width: '100%'}}
              variant="outlined">
              {roles.map(option => (
                <MenuItem key={option} value={option}>
                  <Image source={`./assets/graphics/troopcard/roles/${option}.png`}/> {option}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Mana Cost</Typography>
            <TextField
              id="form-cost"
              value={troop.cost}
              type="number"
              label="Cost"
              onChange={handleChange('cost')}
              margin="normal"
              className={classes.manaCost}
              variant="outlined" />
            <TextField
              id="form-colors"
              value={troop.colors}
              select
              label="Colors"
              onChange={handleChange('colors')}
              SelectProps={{
                MenuProps: {
                  className: classes.menuColor,
                },
              }}
              margin="normal"
              className={classes.manaColors}
              variant="outlined">
              {colors.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  <Image source={`./assets/graphics/troopcard/colors/${option.value}.png`}/> {option.label}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={5} xl={5}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Skills</Typography>
            <TextField
              id="form-attack"
              value={troop.attack}
              type="number"
              label="Attack"
              onChange={handleChange('attack')}
              margin="normal"
              className={classes.skill}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source={`./assets/graphics/troopcard/attack.png`}/>
                  </InputAdornment>
                ),
              }}
              variant="outlined" />
            <TextField
              id="form-armor"
              value={troop.armor}
              type="number"
              label="Armor"
              onChange={handleChange('armor')}
              margin="normal"
              className={classes.skill}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source={`./assets/graphics/troopcard/armor.png`}/>
                  </InputAdornment>
                ),
              }}
              variant="outlined" />
            <TextField
              id="form-life"
              value={troop.life}
              type="number"
              label="Life"
              onChange={handleChange('life')}
              margin="normal"
              className={classes.skill}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Image source={`./assets/graphics/troopcard/life.png`}/>
                  </InputAdornment>
                ),
              }}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Types</Typography>
            <TextField
              id="form-type1"
              value={troop.type1}
              onChange={handleChange('type1')}
              margin="normal"
              type="text"
              label="Type 1"
              className={classes.typeField}
              variant="outlined" />
            <TextField
              id="form-type2"
              value={troop.type2}
              onChange={handleChange('type2')}
              margin="normal"
              type="text"
              label="Type 2 (Optional)"
              className={classes.typeField}
              variant="outlined" />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={8}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4">Traits</Typography>
            <TextField
              id="form-trait1"
              value={troop.trait1}
              select
              label="Trait 1"
              onChange={handleChange('trait1')}
              margin="normal"
              className={classes.trait}

              variant="outlined">
              {traits.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  <Image source={`./assets/graphics/troopcard/traits/${option.value}.png`}/> {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="form-trait2"
              value={troop.trait2}
              select
              label="Trait 2"
              onChange={handleChange('trait2')}
              margin="normal"
              className={classes.trait}
              variant="outlined">
              {traits.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  <Image source={`./assets/graphics/troopcard/traits/${option.value}.png`}/> {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="form-trait3"
              value={troop.trait3}
              select
              label="Trait 3"
              onChange={handleChange('trait3')}
              margin="normal"
              className={classes.trait}
              variant="outlined">
              {traits.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  <Image source={`./assets/graphics/troopcard/traits/${option.value}.png`}/> {option.label}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" gutterBottom>Image</Typography>
            <DropzoneArea
              className={{ backgroundColor: "#1f1f1f" }}
              onChange={handleChange('files')} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};