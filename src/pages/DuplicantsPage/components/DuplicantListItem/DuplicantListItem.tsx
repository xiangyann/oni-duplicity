import * as React from "react";

import classnames from "classnames";

import { Theme, createStyles, withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

import DuplicantName from "./components/DuplicantName";
import DuplicantPortrait from "./components/DuplicantPortrait";
import DuplicantTraits from "./components/DuplicantTraits";
import DuplicantAttributes from "./components/DuplicantAttributes";
import EditButton from "./components/EditButton";

export interface DuplicantListItemProps {
  className?: string;
  gameObjectId: number;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing.unit * 45,
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing.unit * 2
    },
    titleBar: {
      display: "flex",
      flexDirection: "row",
      marginBottom: theme.spacing.unit
    },
    titleControls: {
      marginLeft: "auto"
    },
    content: {
      display: "flex",
      flexDirection: "row",
      marginTop: theme.spacing.unit
    },
    portraitColumn: {
      marginRight: theme.spacing.unit * 2
    },
    attributes: {
      marginLeft: "auto"
    },
    editButton: {
      marginLeft: "auto"
    }
  });

type Props = DuplicantListItemProps & StyleProps<typeof styles>;
const DuplicantListItem: React.SFC<Props> = ({
  className,
  classes,
  gameObjectId
}) => (
  <Paper className={classnames(classes.root, className)}>
    <div className={classes.titleBar}>
      <DuplicantName gameObjectId={gameObjectId} />
      <div className={classes.titleControls}>
        <EditButton
          className={classes.editButton}
          gameObjectId={gameObjectId}
        />
      </div>
    </div>
    <Divider />
    <div className={classes.content}>
      <div className={classes.portraitColumn}>
        <DuplicantPortrait gameObjectId={gameObjectId} />
        <DuplicantTraits gameObjectId={gameObjectId} />
      </div>
      <DuplicantAttributes
        className={classes.attributes}
        gameObjectId={gameObjectId}
      />
    </div>
  </Paper>
);

export default withStyles(styles)(DuplicantListItem);