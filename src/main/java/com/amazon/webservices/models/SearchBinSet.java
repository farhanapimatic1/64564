/*
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package com.amazon.webservices.models;

import java.util.*;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

public class SearchBinSet 
        implements java.io.Serializable {
    private static final long serialVersionUID = 4911757243179719477L;
    private String narrowBy;
    private List<Bin> bin;
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("NarrowBy")
    public String getNarrowBy ( ) { 
        return this.narrowBy;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("NarrowBy")
    public void setNarrowBy (String value) { 
        this.narrowBy = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("Bin")
    public List<Bin> getBin ( ) { 
        return this.bin;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("Bin")
    public void setBin (List<Bin> value) { 
        this.bin = value;
    }
 
}
 