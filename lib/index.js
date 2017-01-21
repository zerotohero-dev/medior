/*
 *          _  .          .     +           .
 *        .(_)          .              *          '
 *        .   .      .    .   /               *        *
 *          .           .    /           +                 '*
 *    . .        .  .       /    .
 *        .  +       .     *
 *       .                   medior
 *
 * This project is a part of the “Byte-Sized JavaScript” videocast.
 *
 * You can watch “Byte-Sized JavaScript” at: https://bytesized.tv/
 *
 * MIT Licensed — See LICENSE.md
 *
 * Send your comments, suggestions, and feedback to me@volkan.io
 */

const topics = {};

const noop = () => {};

const sanitize = ( topic, handler ) => {
    if ( !topic ) { throw new Error( 'Topic must be defined.' ); }
    if ( !handler ) { throw new Error( 'Handler should be defined.' ); }
    if ( typeof topic !== 'string' ) { throw new Error( 'Topic should be a `string`.' ); }
    if ( typeof handler !== 'function' ) { throw new Error( 'Handler should be a `function`.' ); }
};

const sanitizeTopic = ( topic ) => sanitize( topic, noop );

const ensureTopic = ( topic ) => topics [ topic ] = topics[ topic ] || [];

const decorate = ( ...fns ) => ( ...args ) => {
    let result;

    fns.forEach( ( fn ) => { result = fn( ...args ); } );

    return result;
};

const subscribe = decorate(
    sanitize, ensureTopic,
    ( topic, handler ) => topics[ topic ].push( handler )
);

const unsubscribe = decorate(
    sanitize,
    ( topic, handler ) => {
        const handlers = topics[ topic ] || [];

        const index = handlers.indexOf( handler );

        topics[ topic ] = ( index === -1 ) ?
            topics[ topic ] :
            [ ...handlers.slice( 0, index ), ...handlers.slice( index + 1 ) ];
    }
);

const publish = decorate(
    sanitizeTopic,
    ( topic, payload ) => topics[ topic ].forEach( ( handler ) => handler( payload ) )
);

exports.publish = publish;
exports.subscribe = subscribe;
exports.unsubscribe = unsubscribe;
