import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import {LocationContext} from '../../../services/location/location.context'

const SearchBox = styled.View `
background-color: ${(props) => props.theme.colors.ui.header};
      padding: ${(props) => props.theme.space[3]}; 
      `
      export const Search = () => {
        const { keyword, search } = useContext(LocationContext);
        const [searchKeyword, setSearchKeyword] = useState(keyword);

        useEffect(() => {
          setSearchKeyword(keyword);
        }, [keyword]);
        
        return ( 
            <SearchBox>
            <Searchbar
              placeholder="Search for a location"
              value={searchKeyword}
              onSubmitEditing={() => {
                search(searchKeyword);
              }}
              onChangeText={(text) => {
                setSearchKeyword(text);
              }}
           />
           </SearchBox>
         ) }