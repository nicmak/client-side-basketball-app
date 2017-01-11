<Dialog
        title="Statistics"
        autoScrollBodyContent={true}
        actions={actions}
        open={this.state.handlerValue}
      >
        <Tabs
          onChange = {this.handleTab}
          value = {this.state.slideIndex}
         >
           <Tab
             label="Statistics" 
             value={0}
           />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleTab}
        >
            <CustomPlayStats
              player={player}
              playerStats={this.props.playerStats}
            />
        </SwipeableViews>                
      </Dialog>