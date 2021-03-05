import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({ articles }) {
  const classes = useStyles();
  //   console.log(articles);
  return (
    <div>
      {articles.map((article) => {
        return (
          <Card
            key={article.source.id || Math.floor(Math.random() * 100)}
            className={classes.root}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={article.urlToImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="sub">
                  {article.source.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {article.author}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {article.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}