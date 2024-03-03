import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";
import React from "react";

function CardItem() {
    
  return (
    <div>
      <Card className="w-xs" decoration="top" decorationColor="indigo">
          <Flex justifyContent="between" alignItems="center">
            <BadgeDelta deltaType="moderateIncrease">+34%</BadgeDelta>
               <Text>Sales</Text>
          </Flex>
          <Metric>$430984</Metric>
        
      </Card>
    </div>
  );
}

export default CardItem;
